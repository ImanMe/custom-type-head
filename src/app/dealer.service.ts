import { Injectable } from '@angular/core';
import { Dealer } from './dealer';


// TODO: Remove the hardcoded dealers after creating API
const allDealers: Dealer[] = [
  { id: 'C04936', name: '21st Century Motors Inc.' },
  { id: 'C04429', name: 'A-K Motors Inc.' },
  { id: 'C00433', name: 'Aada Leasing' },
  { id: 'C00444', name: 'Achilles Mazda' },
  { id: 'C01521', name: 'Airport Motorhome & Trailer Sales' },
  { id: 'C02223', name: 'Aitken Motors' },
  { id: 'C05007', name: 'Akcent Motor Sales Inc.' },
  { id: 'C00446', name: 'Alliston Volkswagen' },
  { id: 'C00736', name: 'Alta Infiniti' },
  { id: 'C00506', name: 'Alta Nissan' },
  { id: 'C03534', name: 'Astra Motors Inc.' },
  { id: 'C00581', name: 'Attrell Hyundai' },
  { id: 'C04071', name: 'Automile Motor Products' },
  { id: 'C01240', name: 'Badanai Motors Ltd.' },
  { id: 'C08098', name: 'Badanai Motors' },
  { id: 'C03793', name: 'Bancroft Motors' },
  { id: 'C03538', name: 'Bank Street Mazda' },
  { id: 'C00152', name: 'Barrie Honda Auto Sales' },
  { id: 'C02964', name: 'Bay King Motors' },
  { id: 'C01404', name: 'Baywest Toyota' },
  { id: 'C03539', name: 'Belleville Volkswagen' },
  { id: 'C02822', name: 'Bennett Motors' },
  { id: 'C02408', name: 'Bill Bennett Motors' },
  { id: 'C02384', name: 'Bitonti Motors' },
  { id: 'C10563', name: 'Bmw Motorrad Barrie' },
  { id: 'C01407', name: 'Bourgeois Motors Ltd.' },
  { id: 'C02386', name: 'Boyd Bros Motors Limited' },
  { id: 'C01600', name: 'Bridge Motors Limited' },
  { id: 'C03572', name: 'Bridgeport Motors Ltd' },
  { id: 'C05058', name: 'Bridgeview Motors' },
  { id: 'C00601', name: 'Brockville Motor Sales Ltd.' },
  { id: 'C07079', name: 'Broker Motors' },
  { id: 'C04850', name: 'Bupont Motors' },
  { id: 'C02271', name: 'C&C Motors' },
  { id: 'C00652', name: 'Callan Motors' },
  { id: 'C02839', name: 'Cambridge Hyundai' },
  { id: 'C03964', name: 'Campbell Toyota' },
  { id: 'C03726', name: 'Canada Motor Car' },
  { id: 'C02055', name: 'Canadian Fine Motors Inc' },
  { id: 'C01479', name: 'Car Lounge' },
  { id: 'C00615', name: 'Carling Motors Co. Limited' },
  { id: 'C03266', name: 'Carstead Motor Trends' },
  { id: 'C03234', name: 'Carway Motors' },
  { id: 'C02845', name: 'Central Motors' },
  { id: 'C01409', name: 'Chatsworth Motor Sales' },
  { id: 'C02388', name: 'Chenier Motors Ltd.' },
  { id: 'C03582', name: 'Citiwest Motors Inc.' },
  { id: 'C03613', name: 'Civic Motors' },
  { id: 'C04799', name: 'Clancy Motors Ltd' },
  { id: 'C03799', name: 'Cobourg Kia' },
  { id: 'C00507', name: 'Colombo Chrysler Jeep Dodge' },
  { id: 'C00748', name: 'Cornwall Motor Sales' },
  { id: 'C03764', name: 'Country Side Motors' },
  { id: 'C02804', name: 'Craig Terry Motors' },
  { id: 'C00224', name: 'Cruickshank Motors Limited' },
  { id: 'C06115', name: 'Cryderman Motors Ltd' },
  { id: 'C01623', name: 'Curry Motors' },
  { id: 'C01812', name: 'Curve Motor Sport' },
  { id: 'C03979', name: 'Dalmar Motors Limited' },
  { id: 'C03418', name: 'Davenport Motors' },
  { id: 'C01605', name: 'Deejays Scooters/ Deejays Auto' },
  { id: 'C02630', name: 'Degagne Motors' },
  { id: 'C03795', name: 'Del Mastro Motors' },
  { id: 'C03549', name: 'Delaware Motor Sports' },
  { id: 'C02913', name: 'Derand Motorsport' },
  { id: 'C01486', name: 'Derek Rutter Motors' },
  { id: 'C02631', name: 'Derouard Motors' },
  { id: 'C04062', name: 'Dj&M Motors' },
  { id: 'C02194', name: 'Dominion Motors' },
  { id: 'C02946', name: 'Donnelly Ford Lincoln' },
  { id: 'C03451', name: 'Downtown Motors' },
  { id: 'C02667', name: 'Downtown Subaru' },
  { id: 'C00375', name: 'Durham Dodge Chrysler Jeep' },
  { id: 'C02836', name: 'Durnin Motors' },
  { id: 'C03676', name: 'E.L. Fordham Motors Limited' },
  { id: 'C04916', name: 'Edgetown Motors' },
  { id: 'C03951', name: 'Eichenberg Chrysler' },
  { id: 'C02800', name: 'Eli Motors Inc' },
  { id: 'C02656', name: 'Etobicoke Motors Inc.' },
  { id: 'C07245', name: 'Excel Motors' },
  { id: 'C03826', name: 'Expressway Motors Ltd.' },
  { id: 'C03989', name: 'Expressway Motors Ltd.' },
  { id: 'C03999', name: 'Fairview Acura' },
  { id: 'C01417', name: 'Festing Toyota' },
  { id: 'C04066', name: 'Festival City Motors Ltd' },
  { id: 'C05202', name: 'Fieldgate Motors' },
  { id: 'C00717', name: 'Fiesta Motors Inc.' },
  { id: 'C03677', name: 'Fitzgerald Motors Inc.' },
  { id: 'C02855', name: 'Fonthill Motors' },
  { id: 'C01743', name: 'Forbes Motors Inc.' },
  { id: 'C02786', name: 'Fred Just Motors' },
  { id: 'C01649', name: 'Friedrich Motors' },
  { id: 'C02501', name: 'Gallinger Motors Limited' },
  { id: 'C03754', name: 'Gananoque Chev Cadillac' },
  { id: 'C03550', name: 'Gardelli Motors' },
  { id: 'C03516', name: 'Gemini Motors Limited' },
  { id: 'C02713', name: 'Generous Motors 2001' },
  { id: 'C03787', name: 'George Lyons Motors Limited' },
  { id: 'C00619', name: 'Georgina Quality Motors' },
  { id: 'C01470', name: 'German Stars Motor Inc.' },
  { id: 'C03437', name: 'Glamp Rental & Supply Inc' },
  { id: 'C03514', name: 'Glassford Chrysler' },
  { id: 'C04002', name: 'Glen Fenwick Motors Ltd' },
  { id: 'C04068', name: 'Glenleven Chrysler' },
  { id: 'C04569', name: 'Golden Gate Motors' },
  { id: 'C02664', name: 'Golden Mile Motors Ltd' },
  { id: 'C04069', name: 'Goodyear Motors Ltd' },
  { id: 'C02040', name: 'Gore Motors Limited' },
  { id: 'C03974', name: 'Grace Motors' },
  { id: 'C03837', name: 'Grand River Motors' },
  { id: 'C03454', name: 'Grey Motors' },
  { id: 'C01856', name: 'Guelph Toyota' },
  { id: 'C02716', name: 'Gyro Mazda' },
  { id: 'C02806', name: 'Hal Wright Chevrolet-Cadillac' },
  { id: 'C02861', name: 'Haldimand Motors' },
  { id: 'C08138', name: 'Halfway Motors Nissan' },
  { id: 'C02041', name: 'Halfway Motors' },
  { id: 'C02580', name: 'Hallman Motors Limited' },
  { id: 'C03079', name: 'Hanna Motors' },
  { id: 'C03232', name: 'Hannah Motors' },
  { id: 'C04947', name: 'Harmony Hyundai' },
  { id: 'C00927', name: 'Harriston Motors Ltd.' },
  { id: 'C03850', name: 'Heffner Lexus Toyota' },
  { id: 'C04766', name: 'Henley Honda' },
  { id: 'C03851', name: 'Heritage Motors' },
  { id: 'C01987', name: 'Hillview Motors' },
  { id: 'C02760', name: 'Hogewoning Toyota' },
  { id: 'C04074', name: 'Hogg Motor Sales' },
  { id: 'C03975', name: 'Hollister Kia' },
  { id: 'C01366', name: 'Hughes Motor Products Inc.' },
  { id: 'C02672', name: 'Humberview Motors Incorporated' },
  { id: 'C02648', name: 'Hunt Club Volkswagen' },
  { id: 'C03455', name: 'Huntsville Honda' },
  { id: 'C03846', name: 'Huron Motor Products Limited' },
  { id: 'C00799', name: 'Image Motors' },
  { id: 'C02651', name: 'Import Motors' },
  { id: 'C02245', name: 'Import Motors' },
  { id: 'C04572', name: 'J. Domotor Enterprises' },
  { id: 'C03559', name: 'Jack Anning Motor Sales Ltd.' },
  { id: 'C05003', name: 'Jack Casselman Motor Sales' },
  { id: 'C01775', name: 'Jamieson Motor Products Limite' },
  { id: 'C01160', name: 'Jantom Motor Product Sales' },
  { id: 'C03852', name: 'Jeff Weiler Motorsports Ltd.' },
  { id: 'C02042', name: 'Jim Macdonald Motors Ltd.' },
  { id: 'C03645', name: 'Jim Perry Motor Sales' },
  { id: 'C05614', name: 'Jim Spinks Motors' },
  { id: 'C00970', name: 'Jim Thompson Chrysler' },
  { id: 'C03771', name: 'Jim Tubman Motors' },
  { id: 'C05610', name: 'Jj Donnelly Motors Ltd.' },
  { id: 'C05004', name: 'Johnny Smith Motor Sales' },
  { id: 'C02878', name: 'Johnston Chrysler' },
  { id: 'C02570', name: 'JP Motor Sales' },
  { id: 'C02373', name: 'Jtd Motors' },
  { id: 'C03684', name: 'K-W Mitsubishi Motors' },
  { id: 'C00879', name: 'Kalsi Motors Wholesale Inc.' },
  { id: 'C01548', name: 'Kantola Motors Limited' },
  { id: 'C01499', name: 'Ken Shaw Lexus Toyota' },
  { id: 'C02609', name: 'Kia Of Owen Sound' },
  { id: 'C02837', name: 'Kia Sudbury Motors' },
  { id: 'C01187', name: 'Kieswetter Mazda' },
  { id: 'C01367', name: 'Kingscross Hyundai' },
  { id: 'C00972', name: 'Kingston Motor Products Inc.' },
  { id: 'C01389', name: 'Kitchen Motors' },
  { id: 'C00996', name: 'Kitchener Honda' },
  { id: 'C02880', name: 'Knills Motors Ltd' },
  { id: 'C04466', name: 'Kyle Motors 2006 Inc.' },
  { id: 'C05165', name: 'L. And H. Motors Limited' },
  { id: 'C01549', name: 'Lakehead Motors Limited' },
  { id: 'C00914', name: 'Laking Toyota' },
  { id: 'C04772', name: 'Lallo Mazda' },
  { id: 'C03856', name: 'Lambton Ford' },
  { id: 'C01368', name: 'Lang Motorcar Corporation' },
  { id: 'C03734', name: 'Lange & Fetter Motors' },
  { id: 'C08437', name: 'Lawman Motors' },
  { id: 'C02584', name: 'Lawson Motors Ltd.' },
  { id: 'C02339', name: 'Lawson Village Motors' },
  { id: 'C00509', name: 'Leading Edge Motor Cars Inc.' },
  { id: 'C01501', name: 'Legacy Motor Cars' },
  { id: 'C00928', name: 'Leslie Motors' },
  { id: 'C02882', name: 'Liberty Motors Company' },
  { id: 'C06089', name: 'Limestone Motor Cars' },
  { id: 'C04980', name: 'Lms Motor Sales' },
  { id: 'C03867', name: 'London Motor Products Inc.' },
  { id: 'C00604', name: 'Luxury Motorhomes' },
  { id: 'C02802', name: 'Macmaster Motors' },
  { id: 'C02950', name: 'Madsen Motors Ltd' },
  { id: 'C01472', name: 'Maha Motors' },
  { id: 'C02476', name: 'Malibu Motors' },
  { id: 'C01537', name: 'Mancuso James' },
  { id: 'C05637', name: 'Manley Motors Ltd' },
  { id: 'C02641', name: 'Maple Leaf Motors Inc.' },
  { id: 'C06090', name: 'Mar Motors Limited' },
  { id: 'C00786', name: 'Mar Motors Ltd.' },
  { id: 'C02746', name: 'Marden Motors' },
  { id: 'C07200', name: 'Marquez Motors' },
  { id: 'C01223', name: 'Maxximus Motor Sports' },
  { id: 'C00843', name: 'Mcdonnell Motors Ltd.' },
  { id: 'C03878', name: 'Mcgee Motors Ltd.' },
  { id: 'C04081', name: 'Mcinnes Motor Products' },
  { id: 'C00221', name: 'Mckeown Motor Sales' },
  { id: 'C05667', name: 'Mcphails Of Harriston' },
  { id: 'C00295', name: 'Mcquarrie Motor Products Inc.' },
  { id: 'C03688', name: 'Mendes Motors Ltd' },
  { id: 'C05232', name: 'Mercury Motor Sales' },
  { id: 'C00844', name: 'Mid City Honda Centre' },
  { id: 'C00911', name: 'Mid North Motors Ltd.' },
  { id: 'C02340', name: 'Midway Motors' },
  { id: 'C01689', name: 'Mike Jackson Gm' },
  { id: 'C03476', name: 'Miller Ford' },
  { id: 'C01690', name: 'Milltown Motors Ltd' },
  { id: 'C00878', name: 'Mississauga Honda' },
  { id: 'C01042', name: 'Mississauga Motor Mart Inc.' },
  { id: 'C02022', name: 'Motor City Saturn' },
  { id: 'C01035', name: 'Motorland Auto Sales Inc' },
  { id: 'C01108', name: 'Motorway Auto Group Limited' },
  { id: 'C01053', name: 'Mounzer Motors' },
  { id: 'C01054', name: 'My Car' },
  { id: 'C03607', name: 'Myroc Motors' },
  { id: 'C05015', name: 'Neville Motors' },
  { id: 'C03881', name: 'Nevin Motors' },
  { id: 'C03633', name: 'Newson Motors' },
  { id: 'C02745', name: 'Niagara Motors' },
  { id: 'C00482', name: 'Northpoint Motors Ltd.' },
  { id: 'C01058', name: 'Notman Chrysler Dodge Jeep' },
  { id: 'C02565', name: 'O/A Brian Cullen Motors' },
  { id: 'C02896', name: 'Oakville Mazda' },
  { id: 'C05234', name: 'Oakville Motors' },
  { id: 'C03653', name: 'Ogilvie Motors Subaru' },
  { id: 'C05618', name: 'Ontario Motor Mart' },
  { id: 'C02024', name: 'Ontario Motor Sales' },
  { id: 'C01087', name: 'Ontario Quality Car Motors Ltd' },
  { id: 'C00548', name: 'Orangeville Motors' },
  { id: 'C05171', name: 'Orangeville Nissan' },
  { id: 'C05013', name: 'Orr Motors' },
  { id: 'C08092', name: 'Overseas Motors' },
  { id: 'C04023', name: 'Oxford Motors' },
  { id: 'C00513', name: 'Palmery Motors' },
  { id: 'C00110', name: 'Park Motor Sales' },
  { id: 'C01509', name: 'Parkway Toyota' },
  { id: 'C00602', name: 'Pastime Motors' },
  { id: 'C02593', name: 'Paul Sadlon Motors' },
  { id: 'C00848', name: 'Pearce Motors Limited' },
  { id: 'C04979', name: 'Pem East Motors' },
  { id: 'C03085', name: 'Peninsula Ford' },
  { id: 'C02756', name: 'Pennwest Motors' },
  { id: 'C02090', name: 'Performance Kia Motors' },
  { id: 'C03658', name: 'Performance Mazda' },
  { id: 'C03895', name: 'Peter Noble Motors' },
  { id: 'C03746', name: 'Peterborough Kia' },
  { id: 'C03747', name: 'Peterborough Mitsubishi' },
  { id: 'C01728', name: 'Pfaff Motors' },
  { id: 'C01041', name: 'Pfaff Porsche' },
  { id: 'C01391', name: 'Pickering Village Motors' },
  { id: 'C00533', name: 'Plaza Hyundai' },
  { id: 'C09115', name: 'Pramod Motors Ldt' },
  { id: 'C09116', name: 'Pramod Motors Ldt' },
  { id: 'C03665', name: 'Premium Motors' },
  { id: 'C01307', name: 'Prestige Motors' },
  { id: 'C03896', name: 'Prime Motors' },
  { id: 'C04381', name: 'Probart Mazda' },
  { id: 'C00198', name: 'Prouse Pontiac Buick Gmc Ltd' },
  { id: 'C02428', name: 'Quality Motors' },
  { id: 'C01512', name: 'Queenstons Chevrolet' },
  { id: 'C02972', name: 'Race Motors' },
  { id: 'C03899', name: 'Racicot Chrysler' },
  { id: 'C09300', name: 'Rakesh Motors' },
  { id: 'C00349', name: 'Reid Bros Motor Sales Limited' },
  { id: 'C03669', name: 'Reliable Ford' },
  { id: 'C04526', name: 'Revell Ford Lincoln' },
  { id: 'C06112', name: 'Richard Motors Inc.' },
  { id: 'C03901', name: 'Richmond Motors' },
  { id: 'C03447', name: 'Rivard Motors' },
  { id: 'C05091', name: 'Road Sport Motors' },
  { id: 'C02974', name: 'Robinson Marine' },
  { id: 'C05193', name: 'Robinson Motorcycle Ltd.' },
  { id: 'C02919', name: 'Rockwood Motor Products' },
  { id: 'C00850', name: 'Rocky Motors Inc.' },
  { id: 'C01630', name: 'Ron Clark Motors Ltd.' },
  { id: 'C05092', name: 'Roseland Motors' },
  { id: 'C03485', name: 'Rowe Motors' },
  { id: 'C01081', name: 'Roy Foss Motors Ltd' },
  { id: 'C01063', name: 'Roy Foss Saturn Saab Chevrolet' },
  { id: 'C01393', name: 'Roy Nichols Motors' },
  { id: 'C00129', name: 'Saad Motors Ltd' },
  { id: 'C00727', name: 'Saturn Saab Of Thornhill' },
  { id: 'C03903', name: 'Saturn Saab Of Windsor' },
  { id: 'C01720', name: 'Sbm Motor Sales' },
  { id: 'C01000', name: 'Scarsview Chrysler Dodge Jeep' },
  { id: 'C01671', name: 'Scherer Northhill Motors' },
  { id: 'C02978', name: 'Scott Drumond Motors' },
  { id: 'C02787', name: 'Searles Motor Products' },
  { id: 'C00603', name: 'Seaway Motors Inc.' },
  { id: 'C07205', name: 'Shi Star Motors' },
  { id: 'C00223', name: 'Signature Motor Car Inc.' },
  { id: 'C05293', name: 'Sisley For Honda' },
  { id: 'C02976', name: 'Sisley Hyundai' },
  { id: 'C02773', name: 'Skyway Fine Cars' },
  { id: 'C08156', name: 'Slessor Motors' },
  { id: 'C01721', name: 'Slessor Motors' },
  { id: 'C02791', name: 'South-Dale Motors' },
  { id: 'C03501', name: 'Spadoni Motors Ltd' },
  { id: 'C00486', name: 'Spin Lacroix Motors' },
  { id: 'C00851', name: 'Sprucelane Motor Products Inc.' },
  { id: 'C03449', name: 'Stan Nixon Motors Ltd.' },
  { id: 'C03506', name: 'Stauffer Motors Limited' },
  { id: 'C02794', name: 'Stedelbauer Motors Ltd.' },
  { id: 'C03513', name: 'Steeltown Motor Sales Inc' },
  { id: 'C01709', name: 'Stellar Motors' },
  { id: 'C01205', name: 'Stephen Fitzgerald Motor Sales' },
  { id: 'C02621', name: 'Sterne Acura' },
  { id: 'C03088', name: 'Steve May Motors' },
  { id: 'C01710', name: 'Stockie Motors Inc.' },
  { id: 'C02254', name: 'Stoddart Motors' },
  { id: 'C02052', name: 'Stoneleigh Motors' },
  { id: 'C03722', name: 'Strader Motor Sales Ltd' },
  { id: 'C02795', name: 'Stratford City Mazda' },
  { id: 'C03343', name: 'Stratford Motor Products' },
  { id: 'C00656', name: 'Street Kia' },
  { id: 'C01631', name: 'Strickland Toyota' },
  { id: 'C00885', name: 'Summers Motors' },
  { id: 'C02980', name: 'Switzer Motors' },
  { id: 'C00669', name: 'Sygma Motors' },
  { id: 'C07201', name: 'Tara Dawe Motors' },
  { id: 'C02028', name: 'Target Motors Inc' },
  { id: 'C03480', name: 'Taylor Hyundai' },
  { id: 'C04054', name: 'Team Duwyn Motors' },
  { id: 'C03144', name: 'Teatero Motor Products' },
  { id: 'C03276', name: 'The Motor Car Company' },
  { id: 'C03530', name: 'Theo Motors' },
  { id: 'C02181', name: 'Thor Motors' },
  { id: 'C01711', name: 'Tolton Motor Sales Ltd.' },
  { id: 'C04505', name: 'Tom Pirie Motor Sales' },
  { id: 'C00915', name: 'Tom Prince Motors Ltd' },
  { id: 'C00681', name: 'Tony Graham Lexus Toyota' },
  { id: 'C01402', name: 'Trans Canada Nissan' },
  { id: 'C00674', name: 'Trento Subaru And Suzuki' },
  { id: 'C01200', name: 'Trento Subaru And Suzuki' },
  { id: 'C02524', name: 'Tubby Motors Inc.' },
  { id: 'C03053', name: 'Two Wheel Motorsport' },
  { id: 'C01695', name: 'Unionville Motors Pontiac Buic' },
  { id: 'C03361', name: 'United Motors' },
  { id: 'C02206', name: 'Upper Canada Motor Sales Ltd' },
  { id: 'C01519', name: 'Upper James Toyota' },
  { id: 'C01433', name: 'Vance Motors' },
  { id: 'C05522', name: 'Vic Bennett Motors Limited' },
  { id: 'C04112', name: 'Victoria Star Motors Inc' },
  { id: 'C02935', name: 'Voll Motors' },
  { id: 'C03531', name: 'Wallis Pontiac Buick Gmc Limit' },
  { id: 'C02063', name: 'Wayne Toyota' },
  { id: 'C02937', name: 'Wellington Motors' },
  { id: 'C03518', name: 'Wendell Motor Sales Ltd.' },
  { id: 'C00425', name: 'West City Honda' },
  { id: 'C02064', name: 'West End Motors' },
  { id: 'C00805', name: 'Weston Motors Inc' },
  { id: 'C04051', name: 'Westport Motors' },
  { id: 'C03118', name: 'Wexpoint Motors' },
  { id: 'C00809', name: 'Wietzes Motors Limited' },
  { id: 'C01246', name: 'Willowdale Motor Cars' },
  { id: 'C00808', name: 'Wilson Niblett Motors' },
  { id: 'C02983', name: 'Windover Motor Sales Limited' },
  { id: 'C01764', name: 'Xtreme Motors Ltd.' }
];

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor() { }

  getDealers = (): Dealer[] => {
    // TODO: Get all the dealers associated with user from API
    const result: Dealer[] = allDealers;
    return result;
  }
}
