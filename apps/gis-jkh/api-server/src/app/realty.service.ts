import * as alasql from 'alasql';
import { AppartmentList } from './data/kutuzova36_house.js';

import { RealtyList as Realty } from './data/kutuzova36_realty.js';

import { Injectable } from '@nestjs/common';

@Injectable()
export class RealtyService {
  realtyList(): Array<any> {
    const res = alasql(
      'SELECT address, cadastralNumber, prevCadastralNumber  FROM ? ORDER BY address ',
      [Realty]
    );
    return res;
  }
  /**
   *
   */
  houseApartmentsList(): Array<any> {
    alasql.fn.linkOpen = function(guid) {
      return (
        'https://my.dom.gosuslugi.ru/organization-cabinet/#!/apartment?guid=' +
        guid
      );
    };
    const res = alasql(
      `SELECT guid , flatNumber, linkOpen(guid) as openLink
         FROM ? WHERE cadastreNumber is NULL ORDER BY flatNumber `,
      [AppartmentList]
    );
    // ?action=selectApartment&houseTypeCode=1&houseGuid=c3953168-3a70-46aa-85e8-d5ef42531c18&apartmentGuid=25b2c9e7-4a98-4137-a82e-494e56349c7f&apartm
    //     https://my.dom.gosuslugi.ru/organization-cabinet/#!/rosreestr-apartments?action=selectApartment&houseTypeCode=1&houseGuid=c3953168-3a70-46aa-85e8-d5ef42531c18&apartmentGuid=25b2c9e7-4a98-4137-a82e-494e56349c7f&apartmentCategory=1
    return res;
  }
}
