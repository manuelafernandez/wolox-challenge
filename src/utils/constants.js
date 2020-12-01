import hour from '../assets/Ic_Hour.svg'
import homeOffice from '../assets/Ic_HomeOffice.svg'
import workshops from '../assets/Ic_Workshops.svg'
import snacks from '../assets/Ic_DrinkSnacks.svg'
import laptop from '../assets/Ic_laptop.svg'
import brain from '../assets/Ic_brain.svg'

export const MAX_LENGTH_INPUT = 30
export const API_BACKEND =
  'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/'

export const COUNTRIES = [
  {
    id: 'ar',
    country: 'Argentina'
  },
  {
    id: 'ch',
    country: 'Chile'
  },
  {
    id: 'co',
    country: 'Colombia'
  },
  {
    id: 'bo',
    country: 'Bolivia'
  },
  {
    id: 'br',
    country: 'Brasil'
  }
]

export const PROVINCES = {
  ar: {
    id: 'ar',
    country: 'Argentina',
    provinces: [
      {
        id: 'ar_ba',
        province: 'Buenos Aires'
      },
      {
        id: 'ar_co',
        province: 'Córdoba'
      },
      {
        id: 'ar_sa',
        province: 'Santa Fe'
      },
      {
        id: 'ar_me',
        province: 'Mendoza'
      },
      {
        id: 'ar_ca',
        province: 'Chaco'
      }
    ]
  },
  ch: {
    id: 'ch',
    country: 'Chile',
    provinces: [
      {
        id: 'ch_sa',
        province: 'Santiago de chile'
      },
      {
        id: 'ch_co',
        province: 'Córdoba'
      },
      {
        id: 'ch_sa',
        province: 'Santa Fe'
      },
      {
        id: 'ch_me',
        province: 'Mendoza'
      },
      {
        id: 'ch_ca',
        province: 'Chaco'
      }
    ]
  },
  co: {
    id: 'co',
    country: 'Colombia',
    provinces: [
      {
        id: 'co_bo',
        province: 'Bolívar'
      },
      {
        id: 'co_by',
        province: 'Boyacá'
      },
      {
        id: 'co_ca',
        province: 'Caldas'
      },
      {
        id: 'co_ca',
        province: 'Cauca'
      },
      {
        id: 'co_ma',
        province: 'Magdalena'
      }
    ]
  },
  bo: {
    id: 'bo',
    country: 'Bolivia',
    provinces: [
      {
        id: 'bo_lp',
        province: 'La Paz'
      },
      {
        id: 'bo_ch',
        province: 'Chuquisaca'
      },
      {
        id: 'bo_cc',
        province: 'Cochabamba'
      },
      {
        id: 'bo_sa',
        province: 'Santa Cruz'
      },
      {
        id: 'bo_ta',
        province: 'Tarija'
      }
    ]
  },
  br: {
    id: 'br',
    country: 'Brasil',
    provinces: [
      {
        id: 'br_am',
        province: 'Amapá'
      },
      {
        id: 'br_ma',
        province: 'Mato Grosso'
      },
      {
        id: 'br_mi',
        province: 'Minas Gerais'
      },
      {
        id: 'br_ri',
        province: 'Río de Janeiro'
      },
      {
        id: 'br_sa',
        province: 'São Paulo'
      }
    ]
  }
}
