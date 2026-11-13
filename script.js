/* Charge Go — station finder, QR points and rewards */

const STATIONS = [
  {
    id: 'BM01', city: 'Banteay Meanchey',
    nameKm: 'សាកថ្ម សេរីសោភ័ណ', nameEn: 'Serei Saophoan Charger',
    areaKm: 'ក្រុងសេរីសោភ័ណ', areaEn: 'Serei Saophoan',
    lat: 13.5859, lng: 102.9737, power: 60, price: 0.22, status: 'available'
  },
  {
    id: 'BT01', city: 'Battambang',
    nameKm: 'សាកថ្ម បាត់ដំបង', nameEn: 'Battambang EV Hub',
    areaKm: 'ក្រុងបាត់ដំបង', areaEn: 'Battambang',
    lat: 13.0957, lng: 103.2022, power: 120, price: 0.24, status: 'available'
  },
  {
    id: 'BT02', city: 'Battambang',
    nameKm: 'សាកថ្ម ផ្សារណាត់', nameEn: 'Phsar Nat Charger',
    areaKm: 'ផ្សារណាត់', areaEn: 'Phsar Nat',
    lat: 13.1009, lng: 103.198, power: 22, price: 0.18, status: 'busy'
  },
  {
    id: 'KC01', city: 'Kampong Cham',
    nameKm: 'សាកថ្ម កំពង់ចាម', nameEn: 'Kampong Cham Riverside',
    areaKm: 'មាត់ទន្លេ', areaEn: 'Riverside',
    lat: 11.9924, lng: 105.4645, power: 50, price: 0.21, status: 'available'
  },
  {
    id: 'CH01', city: 'Kampong Chhnang',
    nameKm: 'សាកថ្ម កំពង់ឆ្នាំង', nameEn: 'Kampong Chhnang Charger',
    areaKm: 'ក្រុងកំពង់ឆ្នាំង', areaEn: 'Kampong Chhnang',
    lat: 12.2547, lng: 104.6672, power: 30, price: 0.19, status: 'available'
  },
  {
    id: 'KS01', city: 'Kampong Speu',
    nameKm: 'សាកថ្ម ច្បារមន', nameEn: 'Chbar Mon Charger',
    areaKm: 'ក្រុងច្បារមន', areaEn: 'Chbar Mon',
    lat: 11.4533, lng: 104.5208, power: 60, price: 0.22, status: 'busy'
  },
  {
    id: 'KT01', city: 'Kampong Thom',
    nameKm: 'សាកថ្ម ស្ទឹងសែន', nameEn: 'Stueng Saen Charger',
    areaKm: 'ក្រុងស្ទឹងសែន', areaEn: 'Stueng Saen',
    lat: 12.7111, lng: 104.8887, power: 50, price: 0.2, status: 'available'
  },
  {
    id: 'KP01', city: 'Kampot',
    nameKm: 'សាកថ្ម មាត់ស្ទឹងកំពត', nameEn: 'Kampot Riverside EV',
    areaKm: 'មាត់ស្ទឹងកំពត', areaEn: 'Kampot Riverside',
    lat: 10.6104, lng: 104.1819, power: 30, price: 0.19, status: 'available'
  },
  {
    id: 'KD01', city: 'Kandal',
    nameKm: 'សាកថ្ម តាខ្មៅ', nameEn: 'Ta Khmau EV Charger',
    areaKm: 'ក្រុងតាខ្មៅ', areaEn: 'Ta Khmau',
    lat: 11.4833, lng: 104.95, power: 60, price: 0.2, status: 'available'
  },
  {
    id: 'KK01', city: 'Koh Kong',
    nameKm: 'សាកថ្ម ខេមរភូមិន្ទ', nameEn: 'Khemarak Phoumin Charger',
    areaKm: 'ក្រុងខេមរភូមិន្ទ', areaEn: 'Khemarak Phoumin',
    lat: 11.6155, lng: 102.9833, power: 50, price: 0.24, status: 'available'
  },
  {
    id: 'KR01', city: 'Kratie',
    nameKm: 'សាកថ្ម ក្រចេះ', nameEn: 'Kratie Riverside Charger',
    areaKm: 'មាត់ទន្លេមេគង្គ', areaEn: 'Mekong Riverside',
    lat: 12.4881, lng: 106.0188, power: 30, price: 0.2, status: 'busy'
  },
  {
    id: 'MK01', city: 'Mondulkiri',
    nameKm: 'សាកថ្ម សែនមនោរម្យ', nameEn: 'Sen Monorom Charger',
    areaKm: 'ក្រុងសែនមនោរម្យ', areaEn: 'Sen Monorom',
    lat: 12.4558, lng: 107.1881, power: 22, price: 0.19, status: 'available'
  },
  {
    id: 'PP01', city: 'Phnom Penh',
    nameKm: 'ឆាជីហ្គោ សេនត្រាល់', nameEn: 'Charge Go Central',
    areaKm: 'មហាវិថីព្រះសីហនុ', areaEn: 'Preah Sihanouk Blvd',
    lat: 11.5564, lng: 104.9282, power: 60, price: 0.22, status: 'available'
  },
  {
    id: 'PP02', city: 'Phnom Penh',
    nameKm: 'ស្ថានីយ៍សាកថ្ម អ៊ីអន មល', nameEn: 'Aeon Mall EV Hub',
    areaKm: 'មានជ័យ', areaEn: 'Mean Chey',
    lat: 11.5396, lng: 104.948, power: 120, price: 0.25, status: 'busy'
  },
  {
    id: 'PP03', city: 'Phnom Penh',
    nameKm: 'សាកថ្មរហ័ស ទូលគោក', nameEn: 'Toul Kork Fast Charge',
    areaKm: 'ខណ្ឌទូលគោក', areaEn: 'Toul Kork',
    lat: 11.5795, lng: 104.894, power: 50, price: 0.2, status: 'available'
  },
  {
    id: 'PV01', city: 'Preah Vihear',
    nameKm: 'សាកថ្ម ព្រះវិហារ', nameEn: 'Preah Vihear Charger',
    areaKm: 'ក្រុងព្រះវិហារ', areaEn: 'Preah Vihear',
    lat: 13.8076, lng: 104.9808, power: 30, price: 0.21, status: 'busy'
  },
  {
    id: 'PG01', city: 'Prey Veng',
    nameKm: 'សាកថ្ម ព្រៃវែង', nameEn: 'Prey Veng Charger',
    areaKm: 'ក្រុងព្រៃវែង', areaEn: 'Prey Veng',
    lat: 11.4868, lng: 105.3253, power: 50, price: 0.2, status: 'available'
  },
  {
    id: 'PS01', city: 'Pursat',
    nameKm: 'សាកថ្ម ពោធិ៍សាត់', nameEn: 'Pursat Charger',
    areaKm: 'ក្រុងពោធិ៍សាត់', areaEn: 'Pursat',
    lat: 12.5388, lng: 103.9192, power: 60, price: 0.21, status: 'available'
  },
  {
    id: 'RK01', city: 'Ratanakiri',
    nameKm: 'សាកថ្ម បានលុង', nameEn: 'Banlung Charger',
    areaKm: 'ក្រុងបានលុង', areaEn: 'Banlung',
    lat: 13.7394, lng: 106.9873, power: 22, price: 0.2, status: 'available'
  },
  {
    id: 'SR01', city: 'Siem Reap',
    nameKm: 'សាកថ្ម កណ្តាលក្រុងសៀមរាប', nameEn: 'Siem Reap Center Charger',
    areaKm: 'កណ្តាលក្រុងសៀមរាប', areaEn: 'Siem Reap Center',
    lat: 13.3542, lng: 103.855, power: 22, price: 0.18, status: 'available'
  },
  {
    id: 'SR02', city: 'Siem Reap',
    nameKm: 'ស្ថានីយ៍អង្គរ EV', nameEn: 'Angkor EV Station',
    areaKm: 'ផ្លូវអង្គរ', areaEn: 'Angkor Road',
    lat: 13.4125, lng: 103.866, power: 120, price: 0.26, status: 'available'
  },
  {
    id: 'SH01', city: 'Preah Sihanouk',
    nameKm: 'សាកថ្ម ក្រុងព្រះសីហនុ', nameEn: 'Sihanoukville EV Hub',
    areaKm: 'ក្រុងព្រះសីហនុ', areaEn: 'Sihanoukville',
    lat: 10.6253, lng: 103.5234, power: 120, price: 0.25, status: 'available'
  },
  {
    id: 'SH02', city: 'Preah Sihanouk',
    nameKm: 'សាកថ្ម អូរត្រេស', nameEn: 'Otres Beach Charger',
    areaKm: 'ឆ្នេរអូរត្រេស', areaEn: 'Otres Beach',
    lat: 10.59, lng: 103.54, power: 22, price: 0.22, status: 'busy'
  },
  {
    id: 'ST01', city: 'Stung Treng',
    nameKm: 'សាកថ្ម ស្ទឹងត្រែង', nameEn: 'Stung Treng Charger',
    areaKm: 'ក្រុងស្ទឹងត្រែង', areaEn: 'Stung Treng',
    lat: 13.5259, lng: 105.9683, power: 50, price: 0.21, status: 'busy'
  },
  {
    id: 'SV01', city: 'Svay Rieng',
    nameKm: 'សាកថ្ម ច្រកទ្វារបាវិត', nameEn: 'Bavet Border Charge',
    areaKm: 'ច្រកទ្វារបាវិត', areaEn: 'Bavet Border Gate',
    lat: 11.067, lng: 105.8, power: 60, price: 0.23, status: 'busy'
  },
  {
    id: 'SV02', city: 'Svay Rieng',
    nameKm: 'សាកលវិទ្យាល័យស្វាយរៀង (SRU)', nameEn: 'Svay Rieng University (SRU)',
    areaKm: 'សាកលវិទ្យាល័យ', areaEn: 'University',
    lat: 11.10008, lng: 105.76699, power: 22, price: 0.19, status: 'available'
  },
  {
    id: 'SV03', city: 'Svay Rieng',
    nameKm: 'ផ្សារវាលយន្ត', nameEn: 'Veal Yon Market',
    areaKm: 'ផ្សារ', areaEn: 'Market',
    lat: 11.08228, lng: 105.79623, power: 30, price: 0.2, status: 'busy'
  },
  {
    id: 'SV04', city: 'Svay Rieng',
    nameKm: 'ផ្សាររាត្រីមាត់ទន្លេ H9', nameEn: 'H9 Riverside Night Market',
    areaKm: 'ផ្សាររាត្រី', areaEn: 'Night Market',
    lat: null, lng: null, power: 22, price: 0.2, status: 'available'
  },
  {
    id: 'SV05', city: 'Svay Rieng',
    nameKm: 'រង្វង់មូលវៃកូ', nameEn: 'Vai Ko Roundabout',
    areaKm: 'រង្វង់មូល', areaEn: 'Roundabout',
    lat: 11.08232, lng: 105.7969, power: 50, price: 0.21, status: 'available'
  },
  {
    id: 'SV06', city: 'Svay Rieng',
    nameKm: 'កីឡដ្ឋានស្វាយរៀង', nameEn: 'Svay Rieng Stadium',
    areaKm: 'កីឡដ្ឋាន', areaEn: 'Stadium',
    lat: null, lng: null, power: 30, price: 0.19, status: 'busy'
  },
  {
    id: 'SV07', city: 'Svay Rieng',
    nameKm: 'តំបន់ប្រវត្តិសាស្ត្រព្រៃបាសាក់', nameEn: 'Prey Basak Historical Area',
    areaKm: 'តំបន់ប្រវត្តិសាស្ត្រ', areaEn: 'Historical Site',
    lat: null, lng: null, power: 22, price: 0.18, status: 'available'
  },
  {
    id: 'SV08', city: 'Svay Rieng',
    nameKm: 'ប្រាសាទជាហោ (ជីហោ)', nameEn: 'Chea Hao Temple (Chi Hao)',
    areaKm: 'ប្រាសាទបុរាណ', areaEn: 'Ancient Temple',
    lat: null, lng: null, power: 22, price: 0.18, status: 'available'
  },
  {
    id: 'SV09', city: 'Svay Rieng',
    nameKm: 'រមណីយដ្ឋានធម្មជាតិព្រៃគគីរ', nameEn: 'Prey Koki Nature Resort',
    areaKm: 'រមណីយដ្ឋានធម្មជាតិ', areaEn: 'Nature Resort',
    lat: null, lng: null, power: 30, price: 0.2, status: 'available'
  },
  {
    id: 'SV10', city: 'Svay Rieng',
    nameKm: 'ស្ពានព្រែកត្នោត', nameEn: 'Prek Tnot Bridge',
    areaKm: 'ស្ពាន', areaEn: 'Bridge',
    lat: null, lng: null, power: 22, price: 0.19, status: 'busy'
  },
  {
    id: 'SV11', city: 'Svay Rieng',
    nameKm: 'Lucky Express ស្វាយរៀង', nameEn: 'Lucky Express Svay Rieng',
    areaKm: 'ដឹកជញ្ជូន', areaEn: 'Transport',
    lat: null, lng: null, power: 60, price: 0.22, status: 'available'
  },
  {
    id: 'TK01', city: 'Takeo',
    nameKm: 'សាកថ្ម ដូនកែវ', nameEn: 'Daun Kaev Charger',
    areaKm: 'ក្រុងដូនកែវ', areaEn: 'Daun Kaev',
    lat: 10.9908, lng: 104.785, power: 30, price: 0.19, status: 'available'
  },
  {
    id: 'OM01', city: 'Oddar Meanchey',
    nameKm: 'សាកថ្ម សំរោង', nameEn: 'Samraong Charger',
    areaKm: 'ក្រុងសំរោង', areaEn: 'Samraong',
    lat: 14.1817, lng: 103.5176, power: 22, price: 0.2, status: 'available'
  },
  {
    id: 'KE01', city: 'Kep',
    nameKm: 'សាកថ្ម ឆ្នេរកែប', nameEn: 'Kep Beach Charger',
    areaKm: 'ឆ្នេរកែប', areaEn: 'Kep Beach',
    lat: 10.4829, lng: 104.3167, power: 22, price: 0.2, status: 'available'
  },
  {
    id: 'PL01', city: 'Pailin',
    nameKm: 'សាកថ្ម ប៉ៃលិន', nameEn: 'Pailin Charger',
    areaKm: 'ក្រុងប៉ៃលិន', areaEn: 'Pailin',
    lat: 12.8489, lng: 102.6092, power: 22, price: 0.19, status: 'busy'
  },
  {
    id: 'TB01', city: 'Tboung Khmum',
    nameKm: 'សាកថ្ម សួង', nameEn: 'Suong Charger',
    areaKm: 'ក្រុងសួង', areaEn: 'Suong',
    lat: 11.9118, lng: 105.6582, power: 50, price: 0.2, status: 'available'
  }
];

const PROVINCE_LABELS = {
  'Banteay Meanchey': { km: 'បន្ទាយមានជ័យ', en: 'Banteay Meanchey' },
  'Battambang': { km: 'បាត់ដំបង', en: 'Battambang' },
  'Kampong Cham': { km: 'កំពង់ចាម', en: 'Kampong Cham' },
  'Kampong Chhnang': { km: 'កំពង់ឆ្នាំង', en: 'Kampong Chhnang' },
  'Kampong Speu': { km: 'កំពង់ស្ពឺ', en: 'Kampong Speu' },
  'Kampong Thom': { km: 'កំពង់ធំ', en: 'Kampong Thom' },
  'Kampot': { km: 'កំពត', en: 'Kampot' },
  'Kandal': { km: 'កណ្តាល', en: 'Kandal' },
  'Koh Kong': { km: 'កោះកុង', en: 'Koh Kong' },
  'Kratie': { km: 'ក្រចេះ', en: 'Kratie' },
  'Mondulkiri': { km: 'មណ្ឌលគិរី', en: 'Mondulkiri' },
  'Phnom Penh': { km: 'ភ្នំពេញ', en: 'Phnom Penh' },
  'Preah Vihear': { km: 'ព្រះវិហារ', en: 'Preah Vihear' },
  'Prey Veng': { km: 'ព្រៃវែង', en: 'Prey Veng' },
  'Pursat': { km: 'ពោធិ៍សាត់', en: 'Pursat' },
  'Ratanakiri': { km: 'រតនគិរី', en: 'Ratanakiri' },
  'Siem Reap': { km: 'សៀមរាប', en: 'Siem Reap' },
  'Preah Sihanouk': { km: 'ព្រះសីហនុ', en: 'Preah Sihanouk' },
  'Stung Treng': { km: 'ស្ទឹងត្រែង', en: 'Stung Treng' },
  'Svay Rieng': { km: 'ស្វាយរៀង', en: 'Svay Rieng' },
  'Takeo': { km: 'តាកែវ', en: 'Takeo' },
  'Oddar Meanchey': { km: 'ឧត្តរមានជ័យ', en: 'Oddar Meanchey' },
  'Kep': { km: 'កែប', en: 'Kep' },
  'Pailin': { km: 'ប៉ៃលិន', en: 'Pailin' },
  'Tboung Khmum': { km: 'ត្បូងឃ្មុំ', en: 'Tboung Khmum' }
};

const I18N = {
  km: {
    welcome: 'សាកថ្មគ្រប់ទីកន្លែងជាមួយ Charge Go',
    tagline: 'ស្វែងរកស្ថានីយ៍សាកថ្មគ្រប់ទីកន្លែង!',
    myPoints: '⭐ ពិន្ទុរបស់ខ្ញុំ',
    pointsHint: 'រកពិន្ទុដោយស្កេន QR នៅស្ថានីយ៍សាកថ្ម',
    locationTitle: '📍 ទីតាំងសាកថ្ម',
    allLocations: 'គ្រប់ខេត្ត / All Provinces',
    scannerTitle: '▦ ស្កេន QR Code',
    scanHint: 'ស្កេន QR នៅស្ថានីយ៍សាកថ្ម ដើម្បីប្រមូលពិន្ទុ',
    rewardsTitle: '🎁 រង្វាន់',
    rewardRule: '100 ពិន្ទុ = ប័ណ្ណបញ្ចុះតម្លៃ',
    redeem: 'ប្តូរពិន្ទុ',
    footer: 'Charge Go — សាកថ្ម • ស្កេន • ប្រមូលពិន្ទុ • ទទួលរង្វាន់',
    available: 'ទំនេរ',
    busy: 'កំពុងសាក',
    empty: 'មិនមានស្ថានីយ៍សាកថ្មនៅទីនេះទេ',
    chooseStation: 'ជ្រើសរើសស្ថានីយ៍សាកថ្ម',
    pendingPin: 'គ្មានទីតាំងលើផែនទី',
    noMapPin: 'មិនទាន់មានទីតាំងលើផែនទីសម្រាប់ទីតាំងនេះទេ',
    unknownCode: 'កូដ QR មិនត្រឹមត្រូវ — សូមស្កេនកូដរបស់ Charge Go',
    alreadyScanned: 'អ្នកបានស្កេន {name} រួចហើយថ្ងៃនេះ — សូមត្រឡប់មកវិញនៅថ្ងៃស្អែក',
    scanSuccess: 'បានបន្ថែម {n} ពិន្ទុ ពី {name}!',
    scanToast: '+{n} ពិន្ទុ ⚡',
    needMore: 'អ្នកត្រូវការ {n} ពិន្ទុបន្ថែម ដើម្បីប្តូររង្វាន់',
    redeemSuccess: 'បានប្តូររង្វាន់! លេខកូដបញ្ចុះតម្លៃ: {code}',
    redeemToast: 'បានប្តូរ {n} ពិន្ទុ 🎁',
    cameraError: 'មិនអាចប្រើកាមេរ៉ាបានទេ — សូមអនុញ្ញាតកាមេរ៉ា ឬបើកលើទូរស័ព្ទ',
    scannerUnavailable: 'មិនអាចផ្ទុកកម្មវិធីស្កេនបានទេ — សូមពិនិត្យការតភ្ជាប់អ៊ីនធឺណិត'
  },
  en: {
    welcome: 'Charge Anywhere with Charge Go',
    tagline: 'Find Charging Stations Anywhere!',
    myPoints: '⭐ My Points',
    pointsHint: 'Collect points by scanning QR codes',
    locationTitle: '📍 Charging Locations',
    allLocations: 'All Provinces',
    scannerTitle: '▦ Scan QR Code',
    scanHint: 'Scan the QR code at a charging station to earn points',
    rewardsTitle: '🎁 Rewards',
    rewardRule: '100 Points = Discount Reward',
    redeem: 'Redeem Points',
    footer: 'Charge Go — Charge • Scan • Collect points • Get rewards',
    available: 'Available',
    busy: 'In Use',
    empty: 'No charging stations here yet',
    chooseStation: 'Choose a charging station',
    pendingPin: 'No map pin',
    noMapPin: 'No map pin available for this location yet',
    unknownCode: 'Invalid QR code — please scan a Charge Go code',
    alreadyScanned: 'You already scanned {name} today — come back tomorrow',
    scanSuccess: '+{n} points from {name}!',
    scanToast: '+{n} points ⚡',
    needMore: 'You need {n} more points to redeem a reward',
    redeemSuccess: 'Redeemed! Your discount code: {code}',
    redeemToast: 'Redeemed {n} points 🎁',
    cameraError: 'Camera unavailable — allow camera access or use a phone',
    scannerUnavailable: 'Scanner could not load — check your internet connection'
  }
};

const POINTS_PER_SCAN = 10;
const REDEEM_COST = 100;
const STORAGE = { points: 'cg_points', scans: 'cg_scans', lang: 'cg_lang' };

let currentLang = localStorage.getItem(STORAGE.lang) === 'en' ? 'en' : 'km';
let points = Number(localStorage.getItem(STORAGE.points)) || 0;
let map = null;
let markerLayer = null;
let scanner = null;
let cameraWarned = false;
let toastTimer = null;
let lastScan = { code: '', at: 0 };
const markers = new Map();

const $ = (id) => document.getElementById(id);
const t = (key) => I18N[currentLang][key];
const fill = (template, values) =>
  Object.entries(values).reduce((out, [name, value]) => out.replace(`{${name}}`, value), template);

const stationName = (station) => (currentLang === 'km' ? station.nameKm : station.nameEn);
const stationArea = (station) => (currentLang === 'km' ? station.areaKm : station.areaEn);
const hasCoords = (station) => Number.isFinite(station.lat) && Number.isFinite(station.lng);

document.addEventListener('DOMContentLoaded', init);

function init() {
  applyLanguage();
  renderPoints(false);
  initMap();
  renderLocations('all');
  initScanner();

  $('langBtn').addEventListener('click', changeLanguage);
  $('redeemBtn').addEventListener('click', redeemPoints);
}

/* ---------- Language ---------- */

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.body.dataset.lang = currentLang;
  $('langBtn').textContent = currentLang === 'km' ? '🌐 English' : '🌐 ខ្មែរ';

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const text = I18N[currentLang][node.dataset.i18n];
    if (text) node.textContent = text;
  });

  Array.from($('city').options).forEach((option) => {
    option.textContent = option.value === 'all'
      ? t('allLocations')
      : PROVINCE_LABELS[option.value][currentLang];
  });
}

function changeLanguage() {
  currentLang = currentLang === 'km' ? 'en' : 'km';
  localStorage.setItem(STORAGE.lang, currentLang);
  applyLanguage();
  renderLocations($('city').value);
  $('rewardResult').textContent = '';
  $('result').className = '';
  $('result').textContent = t('scanHint');
}

/* ---------- Points ---------- */

function savePoints() {
  localStorage.setItem(STORAGE.points, String(points));
}

function renderPoints(animate = true) {
  const node = $('points');
  node.textContent = points.toLocaleString(currentLang === 'km' ? 'km-KH' : 'en-US');
  if (animate) {
    node.classList.remove('bump');
    void node.offsetWidth;
    node.classList.add('bump');
  }
}

function getScans() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.scans)) || {};
  } catch {
    return {};
  }
}

/* ---------- Map & locations ---------- */

function initMap() {
  if (typeof L === 'undefined') return;

  map = L.map('map', { scrollWheelZoom: false }).setView([12.4, 104.9], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    className: 'map-tiles-dark',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
}

function pinIcon(station) {
  return L.divIcon({
    className: '',
    html: `<div class="pin ${station.status}"><span>⚡</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });
}

function popupHtml(station) {
  const statusLabel = station.status === 'available' ? t('available') : t('busy');
  return `
    <strong>${stationName(station)}</strong>
    <div class="popup-meta">${stationArea(station)} · ${PROVINCE_LABELS[station.city][currentLang]}</div>
    <div class="chips popup-chips">
      <span class="chip">⚡ ${station.power} kW</span>
      <span class="chip">$${station.price.toFixed(2)}/kWh</span>
      <span class="status ${station.status}"><i></i>${statusLabel}</span>
    </div>`;
}

function stationCard(station) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'station-card';
  card.setAttribute('aria-label', t('chooseStation'));

  const statusLabel = station.status === 'available' ? t('available') : t('busy');
  const cityLabel = PROVINCE_LABELS[station.city][currentLang];
  const pinChip = hasCoords(station) ? '' : `<span class="chip pending">📍 ${t('pendingPin')}</span>`;

  card.innerHTML = `
    <div class="station-top">
      <span class="station-name">${stationName(station)}</span>
      <span class="status ${station.status}"><i></i>${statusLabel}</span>
    </div>
    <span class="station-meta">${stationArea(station)} · ${cityLabel}</span>
    <div class="chips">
      <span class="chip">⚡ ${station.power} kW</span>
      <span class="chip">$${station.price.toFixed(2)}/kWh</span>
      ${pinChip}
    </div>`;

  card.addEventListener('click', () => focusStation(station));
  return card;
}

function showLocations() {
  renderLocations($('city').value);
}

function renderLocations(city) {
  const list = $('locationList');
  const filtered = city === 'all' ? STATIONS : STATIONS.filter((s) => s.city === city);
  list.innerHTML = '';

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = t('empty');
    list.appendChild(empty);
  } else {
    filtered.forEach((station) => list.appendChild(stationCard(station)));
  }

  if (!map) return;

  markerLayer.clearLayers();
  markers.clear();
  filtered.forEach((station) => {
    if (!hasCoords(station)) return;
    const marker = L.marker([station.lat, station.lng], { icon: pinIcon(station) })
      .addTo(markerLayer)
      .bindPopup(popupHtml(station));
    markers.set(station.id, marker);
  });

  const mappable = filtered.filter(hasCoords);
  if (!mappable.length) return;

  if (mappable.length === 1) {
    map.flyTo([mappable[0].lat, mappable[0].lng], 13, { duration: 0.6 });
  } else if (city === 'all') {
    map.flyTo([12.4, 104.9], 7, { duration: 0.6 });
  } else {
    map.flyToBounds(L.latLngBounds(mappable.map((s) => [s.lat, s.lng])).pad(0.35), { duration: 0.6 });
  }
}

function focusStation(station) {
  if (!hasCoords(station)) {
    toast(t('noMapPin'));
    return;
  }

  if (!map) return;
  map.flyTo([station.lat, station.lng], 14, { duration: 0.6 });
  const marker = markers.get(station.id);
  if (marker) {
    marker.openPopup();
    setTimeout(() => map.invalidateSize(), 250);
  }
}

/* ---------- QR scanning ---------- */

function initScanner() {
  if (typeof Html5QrcodeScanner === 'undefined') {
    showResult(t('scannerUnavailable'), 'error');
    return;
  }

  try {
    scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 220, height: 220 },
      rememberLastUsedCamera: true
    });

    scanner.render(
      (decodedText) => {
        cameraWarned = false;
        handleScan(decodedText);
      },
      () => {
        if (cameraWarned) return;
        cameraWarned = true;
        const result = $('result');
        if (!result.classList.contains('success')) showResult(t('cameraError'), 'warn');
      }
    );
  } catch {
    showResult(t('scannerUnavailable'), 'error');
  }
}

function showResult(message, type = '') {
  const node = $('result');
  node.textContent = message;
  node.className = type;
}

function handleScan(rawCode) {
  const code = String(rawCode || '').trim().toUpperCase();
  const now = Date.now();
  if (code === lastScan.code && now - lastScan.at < 4000) return;
  lastScan = { code, at: now };

  const station = STATIONS.find((s) => code === s.id || code === `CG-${s.id}`);
  if (!station) {
    showResult(t('unknownCode'), 'error');
    return;
  }

  const scans = getScans();
  const today = new Date().toISOString().slice(0, 10);
  if (scans[station.id] === today) {
    showResult(fill(t('alreadyScanned'), { name: stationName(station) }), 'warn');
    return;
  }

  scans[station.id] = today;
  localStorage.setItem(STORAGE.scans, JSON.stringify(scans));

  points += POINTS_PER_SCAN;
  savePoints();
  renderPoints();

  showResult(fill(t('scanSuccess'), { n: POINTS_PER_SCAN, name: stationName(station) }), 'success');
  toast(fill(t('scanToast'), { n: POINTS_PER_SCAN }));
}

/* ---------- Rewards ---------- */

function redeemPoints() {
  const reward = $('rewardResult');
  reward.className = '';

  if (points < REDEEM_COST) {
    const missing = REDEEM_COST - points;
    reward.textContent = fill(t('needMore'), { n: missing.toLocaleString() });
    reward.classList.add('error');
    return;
  }

  points -= REDEEM_COST;
  savePoints();
  renderPoints();

  const code = makeRewardCode();
  reward.textContent = fill(t('redeemSuccess'), { code });
  toast(fill(t('redeemToast'), { n: REDEEM_COST }));
}

function makeRewardCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let body = '';
  for (let i = 0; i < 6; i += 1) {
    body += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `CG-${body}`;
}

/* ---------- Toast ---------- */

function toast(message) {
  const node = $('toast');
  node.textContent = message;
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 2600);
}
