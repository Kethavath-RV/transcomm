export function findCountryCode(code: string | null): string{
    if(!code) return "";
    return countryCodes[code] ?? '';
    }

const countryCodes: { [key:string] : string} = {"SDV": "IL","GZA": "IL","ZDM": "IL","TLV": "IL","HFA": "IL","BEV": "IL","ZJF": "AE","OAZ": "AF","OAI": "AF","ANU": "AG","QDI": "AT","RQL": "AU","NSW": "AU","BPC": "CM","BTA": "CM","DGM": "CN","XIY": "CN","PEK": "CN","ZTZ": "DE","RMS": "DE","SPM": "DE","BFE": "DE","FNB": "DE","KSF": "DE","QWU": "DE","ZNJ": "DE","ZPE": "DE","ZPF": "DE","ZPR": "DE","ZQL": "DE","QFB": "DE","NUM": "DE","MZD": "EC","ORE": "FR","LIL": "FR","LCY": "GB","QGY": "HU","RRO": "IT","TSF": "IT","BGY": "IT","NKM": "JP","KGF": "KZ","JJC": "MX","RMX": "MX","NLU": "MX","BJX": "MX","CVJ": "MX","FMX": "MX","HMX": "MX","JMX": "MX","OMX": "MX","REF": "MX","LEN": "MX","SZB": "MY","WVB": "NA","XXF": "NZ","AUF": "QA","OTB": "QA","NOI": "RU","SVX": "RU","JBL": "SA","MAC": "SA","SAW": "TR","IGL": "TR","BFI": "US","DWF": "US","FCH": "US","OPF": "US","SDM": "US","BQK": "US","JCC": "US","SEE": "US","TMB": "US","ZYP": "US","STP": "US","IAH": "US","AAE": "DZ","AAO": "VE","AAR": "DK","ABE": "US","ABJ": "CI","ABT": "SA","ABV": "NG","ABZ": "GB","ACA": "MX","GHO": "GH","ACC": "GH","ACY": "US","ADA": "TR","ADD": "ET","ADE": "YE","ADL": "AU","AER": "RU","XML": "ES","AGU": "MX","AHB": "SA","AJF": "SA","AKL": "NZ","AKX": "KZ","ALA": "KZ","ALB": "US","XXA": "ES","ALE": "US","ALG": "DZ","ALP": "SY","ALV": "AD","ALX": "EG","AMD": "IN","AMM": "JO","AMS": "NL","ANC": "US","ANF": "CL","AOI": "IT","APW": "WS","AQJ": "JO","AQP": "PE","ARH": "RU","ARI": "CL","ARK": "TZ","ASM": "ER","ASU": "PY","ATH": "GR","ATL": "US","AUA": "AW","AUH": "AE","AUS": "US","AXA": "AI","AYT": "TR","RLC": "BH","BAH": "BH","BAK": "AZ","BAQ": "CO","BCN": "ES","BCT": "US","BDA": "BM","BDO": "ID","VBA": "IN","BEG": "RS","BEL": "BR","BER": "DE","BEW": "MZ","BEY": "LB","BFS": "GB","BAF": "CM","BGA": "CO","BGF": "CF","BGI": "BB","BGO": "NO","BGW": "IQ","BHI": "AR","BHM": "US","BHX": "GB","BHZ": "BR","BIQ": "FR","BJL": "GM","BJM": "BI","BJS": "CN","BKI": "MY","BKK": "TH","BKO": "ML","BKY": "CD","BLA": "VE","BLL": "DK","BLQ": "IT","BLR": "IN","BLZ": "MW","BMI": "US","BNA": "US","BNE": "AU","BNU": "BR","BNX": "BA","BOD": "FR","BOG": "CO","BOM": "IN","BON": "XB","MLH": "FR","BOS": "US","BPN": "ID","BRE": "DE","BRI": "IT","BRM": "VE","BRQ": "CZ","BRS": "GB","BRU": "BE","BFA": "BE","BSB": "BR","BSL": "CH","BSR": "IQ","BTH": "ID","BTS": "SK","BSA": "TR","BUD": "HU","BUE": "AR","BUN": "CO","BUQ": "ZW","BWI": "US","BWN": "BN","BZE": "BZ","BZV": "CG","CAB": "AO","CAI": "EG","CAN": "CN","CAS": "MA","CAY": "GF","CBB": "BO","CBG": "GB","CBR": "AU","CCP": "CL","SMG": "VE","MIQ": "VE","CCS": "VE","CCU": "IN","CDG": "FR","CEB": "PH","CEK": "RU","CEN": "MX","CGH": "BR","CGK": "ID","CGN": "DE","CHC": "NZ","CHS": "US","CID": "US","CJB": "IN","CJS": "MX","CKY": "GN","CLE": "US","CLJ": "RO","CLO": "CO","CLQ": "MX","CLT": "US","CLU": "US","CMB": "LK","CME": "MX","CNS": "AU","COK": "IN","COO": "BJ","COP": "US","COR": "AR","CPH": "DK","CPQ": "BR","CPT": "ZA","CTA": "IT","CTG": "CO","CTU": "CN","CUE": "EC","CUL": "MX","CUN": "MX","CUR": "XC","CUU": "MX","CVG": "US","CWB": "BR","CXI": "KI","CXJ": "BR","DAC": "BD","DAM": "SY","DAR": "TZ","DAV": "PA","DAY": "US","DCA": "US","DEL": "IN","DEN": "US","DGG": "MX","DHA": "SA","DIL": "TL","DKR": "SN","DLA": "CM","DLC": "CN","DME": "RU","DMM": "SA","DNK": "UA","DOH": "QA","DOM": "DM","DPS": "ID","DRS": "DE","DRW": "AU","DTM": "DE","DTW": "US","DUB": "IE","DUR": "ZA","DUS": "DE","DXH": "AE","DXB": "AE","DYU": "TJ","DZA": "YT","EAM": "SA","EBB": "UG","EBL": "IQ","ECN": "TR","EDI": "GB","EIN": "NL","ELA": "US","ELP": "US","ELQ": "SA","ELS": "ZA","ELZ": "US","EMA": "GB","ERF": "DE","ESB": "TR","EUX": "XE","EVN": "AM","EXT": "GB","FAE": "FO","FBM": "CD","FDF": "MQ","FFT": "US","FIH": "CD","FLR": "IT","FMY": "US","FNA": "SL","FNJ": "KP","FOC": "CN","FOR": "BR","FPO": "BS","FRA": "DE","FRC": "BR","FRG": "US","FRU": "KG","FTK": "US","FUK": "JP","FUN": "TV","FYV": "US","GBE": "BW","GCI": "GG","GCM": "KY","GDL": "MX","GDN": "PL","GDT": "TC","GDX": "RU","GEO": "GY","GIB": "GI","GIZ": "SA","GLA": "GB","GND": "GD","GOA": "IT","GOJ": "RU","GOT": "SE","GOU": "CM","GRR": "US","GRU": "BR","GRZ": "AT","GSO": "US","GSP": "US","GTL": "GT","GUM": "GU","GUW": "KZ","GVA": "CH","GYE": "EC","HAJ": "DE","HAK": "CN","HAM": "DE","HAN": "VN","HAS": "SA","HAV": "CU","AQI": "SA","HEL": "FI","HER": "GR","NWK": "US","HGA": "XS","HGH": "CN","HHH": "US","HHN": "DE","HIR": "SB","HHP": "HK","HKG": "HK","HKT": "TH","HME": "DZ","HMO": "MX","HNL": "US","HOF": "SA","HRE": "ZW","HRL": "US","HYD": "IN","IBA": "NG","ICN": "KR","ICT": "US","IEV": "UA","IFN": "IR","IJK": "RU","IKT": "RU","ILN": "US","INN": "AT","INU": "NR","INV": "GB","IOM": "GB","IPW": "GB","IQQ": "CL","IQT": "PE","ISB": "PK","IST": "TR","IUE": "NU","VOM": "IN","JAI": "IN","JAL": "MX","JAX": "US","JED": "SA","KHJ": "SA","JER": "JE","JFB": "US","JFK": "US","JHB": "MY","JIB": "DJ","JIN": "UG","JKT": "ID","JNB": "ZA","JOI": "BR","JUB": "SS","KAD": "NG","KBL": "AF","KCH": "MY","KDH": "AF","KEL": "DE","KGD": "RU","KGL": "RW","KHH": "TW","KHI": "PK","KHV": "RU","KIH": "IR","KIN": "JM","KIV": "MD","KIW": "ZM","KIX": "JP","KJA": "RU","KLF": "RU","KLU": "AT","KRO": "RU","KRR": "RU","KRS": "NO","KRT": "SD","KSC": "SK","KSZ": "RU","KTM": "NP","KTW": "PL","KUF": "RU","KUL": "MY","KWI": "KW","KYZ": "RU","KZN": "RU","LAD": "AO","LAE": "PG","LAP": "MX","LAS": "US","LAX": "US","LBA": "GB","LBV": "GA","LCA": "CY","LDY": "GB","LED": "RU","LEH": "FR","LEJ": "DE","LFW": "TG","LGA": "US","LGB": "US","LGW": "GB","LHE": "PK","RED": "GB","LHR": "GB","LIM": "PE","LIS": "PT","LIT": "US","LJU": "SI","LLW": "MW","LMM": "MX","LNZ": "AT","LON": "GB","LOS": "NG","LPB": "BO","LPL": "GB","LRD": "US","LSP": "VE","LUG": "CH","VIF": "IN","LUN": "ZM","LUX": "LU","LYS": "FR","MAA": "IN","MAD": "ES","MAJ": "MH","MAM": "MX","MAN": "GB","MAO": "BR","MAR": "VE","MBA": "KE","MBJ": "JM","MBW": "AU","MCH": "EC","MCI": "US","OOS": "OM","MCT": "OM","MCX": "RU","MDE": "CO","MDQ": "AR","MDT": "US","MDZ": "AR","MED": "SA","MEL": "AU","MEM": "US","MES": "ID","CYY": "MX","DCB": "MX","HPU": "MX","MEX": "MX","MCA": "MO","MGA": "NI","MGQ": "SO","MHD": "IR","MHN": "DE","MIA": "US","MID": "MX","MIL": "IT","MKE": "US","MLA": "MT","MLE": "MV","MLM": "MX","MLW": "LR","MMA": "SE","MME": "GB","MMK": "RU","MNB": "CD","MNI": "MS","MNL": "PH","MOW": "RU","MPM": "MZ","MPN": "FK","MRS": "FR","MRU": "MU","MSE": "GB","MSN": "US","MSQ": "BY","MSU": "LS","MSY": "US","MTS": "SZ","MTT": "MX","MTY": "MX","MUC": "DE","MVD": "UY","MVR": "CM","MWZ": "TZ","MXL": "MX","MXP": "IT","MCY": "VE","MZL": "CO","MZM": "FR","MZT": "MX","NAN": "FJ","NAP": "IT","NAS": "BS","NBO": "KE","NCE": "FR","NCL": "GB","NDJ": "TD","NEF": "RU","NEV": "XN","NGE": "CM","NGO": "JP","NIM": "NE","NKC": "MR","NLD": "MX","NOU": "NC","NOZ": "RU","NRT": "JP","NTE": "FR","NUE": "DE","NUQ": "US","OAX": "MX","ODS": "UA","OKC": "US","OKT": "RU","OMA": "US","OMS": "RU","ONT": "US","ONX": "PA","OPO": "PT","ORD": "US","ORK": "IE","ORL": "US","ORN": "DZ","ORY": "FR","OSA": "JP","OSL": "NO","OSR": "CZ","BUH": "RO","OUA": "BF","OUL": "FI","OVB": "RU","OVD": "ES","BXO": "GW","OXF": "GB","PAO": "US","PAP": "HT","PAZ": "MX","PBC": "MX","PBH": "BT","PBL": "VE","PBM": "SR","PDX": "US","PEE": "RU","QPG": "IT","PEI": "CO","PEN": "MY","PER": "AU","PHC": "NG","PHL": "US","PHX": "US","PIT": "US","PLZ": "ZA","PMI": "ES","PMV": "VE","PNH": "KH","PNI": "FM","PNQ": "IN","PNR": "CG","POA": "BR","POG": "GA","POL": "MZ","POM": "PG","POS": "TT","POZ": "PL","PPG": "AS","PPT": "PF","PRG": "CZ","PRN": "KV","PRY": "ZA","LEG": "IT","PSD": "EG","PSE": "PR","PTP": "GP","PTY": "PA","PUQ": "CL","PUS": "KR","PVG": "CN","PVR": "MX","PWQ": "KZ","PZB": "ZA","PZO": "VE","QAL": "IT","QBS": "IT","HOS": "SY","QRO": "MX","QRW": "NG","QSB": "BR","RAE": "SA","RAI": "CV","RAR": "CK","RBA": "MA","RCB": "ZA","RDU": "US","REC": "BR","REK": "IS","REN": "RU","RGN": "MM","RIO": "BR","RIX": "LV","RJK": "HR","RMI": "SM","RNH": "US","RNO": "US","ROC": "US","ROM": "IT","ROR": "PW","ROS": "AR","ROV": "RU","RTM": "NL","RTW": "RU","RUH": "SA","RUN": "RE","SAH": "YE","SAL": "SV","SAP": "HN","SAT": "US","SAV": "US","SBH": "XY","SCK": "US","SCL": "CL","SCN": "DE","SCO": "KZ","SCQ": "ES","SDF": "US","SDQ": "DO","SEL": "KR","SER": "US","SEZ": "SC","SFJ": "GL","SFO": "US","SGE": "DE","SGH": "US","SGN": "VN","SHA": "CN","SHJ": "AE","SIN": "SG","SJJ": "BA","SJK": "BR","SCR": "CR","SJU": "PR","SKB": "KN","SKG": "GR","SKP": "MK","SKX": "RU","SLC": "US","SLL": "OM","SLP": "MX","SLU": "LC","SLW": "MX","SMF": "US","SNN": "IE","SOF": "BG","SOU": "GB","SPN": "MP","SRE": "BO","SRZ": "BO","SSA": "BR","SSG": "GQ","SSZ": "BR","STI": "DO","STL": "US","STO": "SE","ARN": "SE","STR": "DE","STT": "VI","STX": "VI","SUB": "ID","SUV": "FJ","SVD": "VC","SVG": "NO","SVO": "RU","XVQ": "ES","SWA": "CN","SWN": "GB","SWT": "RU","SXB": "FR","SXL": "IE","SXM": "XM","SYD": "AU","SYZ": "IR","SZA": "AO","SZG": "AT","SZV": "CN","SZX": "CN","SZZ": "PL","TAE": "KR","TAM": "MX","TAO": "CN","TAP": "MX","TAS": "UZ","TBS": "GE","TBU": "TO","TBZ": "IR","TDD": "BO","TEQ": "TR","TET": "MZ","TGD": "ME","TGU": "HN","TGZ": "MX","THR": "IR","TIA": "AL","TIF": "SA","TIJ": "MX","TIM": "ID","TIP": "LY","TJM": "RU","TKU": "FI","TLC": "MX","TLL": "EE","TLS": "FR","TMP": "FI","TMS": "ST","TNN": "TW","TNR": "MG","TOF": "RU","RTH": "VG","TPE": "TW","CKS": "TW","HCU": "TW","TNY": "MX","TRC": "MX","TRD": "NO","TRN": "IT","TRS": "IT","TRW": "KI","TSE": "KZ","TSN": "CN","TSR": "RO","TTN": "US","TUL": "US","TUN": "TN","TUS": "US","TUU": "SA","TXG": "TW","TXK": "US","TYA": "RU","TYO": "JP","UAQ": "AR","UFA": "RU","UIO": "EC","UKK": "KZ","ULN": "MN","ULY": "RU","UPG": "ID","UUS": "RU","VAA": "FI","VAP": "CL","VCE": "IT","VCP": "BR","VER": "MX","VGO": "ES","VIE": "AT","VIT": "ES","VIX": "BR","VLC": "ES","VLI": "VU","VLN": "VE","VNO": "LT","VNY": "US","VOG": "RU","VOZ": "RU","VRN": "IT","VSA": "MX","VST": "SE","VTE": "LA","VVO": "RU","WAW": "PL","WDH": "NA","WLG": "NZ","WRO": "PL","WUH": "CN","XMN": "CN","YAO": "CM","YEG": "CA","YHM": "CA","YHZ": "CA","YKS": "RU","YLW": "CA","YMX": "CA","YAN": "SA","YOK": "JP","YOW": "CA","YQM": "CA","YQR": "CA","YUL": "CA","YVA": "KM","YVR": "CA","YWG": "CA","YXE": "CA","YYC": "CA","YYT": "CA","ZAG": "HR","XZR": "ES","ZCL": "MX","ZEC": "ZA","ZIH": "MX","ZLO": "MX","ZRH": "CH","ZUH": "CN"}