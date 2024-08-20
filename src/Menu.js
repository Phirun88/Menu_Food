import React, { useEffect } from "react";

// Define the importImages function
const importImages = (imageNames) => {
  const images = {};
  imageNames.forEach((name) => {
    images[name] = require(`./images/${name}`); // Use require to dynamically load images
  });
  return images;
};
const Menu = () => {
  useEffect(() => {
    generateMenu(menu);
  }, []);
  const images = importImages([
    "logo.jpg",
    "F001.jpg",
    "F002.jpg",
    "F02_A.jpg",
    "F003.jpg",
    "F03_A.jpg",
    "F004.jpg",
    "F04_A.jpg",
    "F005.jpg",
    "F006.jpg",
    "F007.jpeg",
    "F008.jpg",
    "F009.jpg",
    "F010.jpg",
    "F011.jpg",
    "F012.jpg",
    "F012_A.jpg",
    "F013.jpg",
    "F014.jpg",
    "F015.jpg",
    "F016.jpg",
    "F017.jpg",
    "F018.jpg",
    "F019.jpg",
    "F020.jpg",
    "F021.jpg",
    "F022.jpg",
    "F023.jpg",
    "F024.jpg",
    "F025.jpg",
    "F026.jpg",
    "F027.jpg",
    "F028.jpg",
    "F029.jpg",
    "F030.jpg",
    "F031.jpg",
    "F032.jpg",
    "F033.jpg",
    "F034.jpg",
    "F035.jpg",
    "F036.jpg",
    "F037.jpg",
    "F038.jpg",
    "F039.jpg",
    "F040.jpg",
    "F041.jpg",
    "F042.jpg",
    "F043.jpg",
    "F044.jpg",
    "F045.jpg",
    "F046.jpg",
    "F047.jpg",
    "F048.jpg",
    "F049.jpg",
    "F050.jpg",
    "F051.jpg",
    "F052.jpg",
    "F053.jpg",
    "F054.jpg",
    "F055.jpg",
    "F056.jpg",
    "F057.jpg",
    "F058.jpg",
    "F059.jpg",
    "F060.jpg",
    "F061.jpg",
    "F062.jpg",
    "F063.jpg",
    "F064.jpg",
    "F065.jpg",
    "F066.jpg",
    "F067.jpg",
    "F068.jpg",
    "F069.jpg",
    "F070.jpg",
    "F071.jpg",
    "F072.jpg",
    "F073.webp",
    "F074.jpg",
    "F075.jpg",
    "F076.jpg",
    "F077.jpg",
    "F078.jpg",
    "F079.jpg",
    "F080.jpg",
    "F081.jpg",
    "F082.jpg",
    "F083.jpg",
    "F084.jpg",
    "F085.jpg",
    "F086.jpg",
    "F087.jpg",
    "F088.jpg",
    "F089.jpg",
    "F090.jpg",
    "F091.jpg",
    "F092.jpg",
    "F093.jpg",
    "F094.jpg",
    "F095.jpg",
    "F096.jpg",
    "F097.jpg",
    "F098.jpg",
    "F099.jpg",
    "F100.jpg",
    "F101.jpg",
    "F102.jpg",
    "F103.jpg",
    "F104.jpg",
    "F105.jpg",
    "F106.jpg",
    "F107.jpg",
    "F108.jpg",
    "F109.jpg",
    "F110.jpg",
    "F111.jpg",
    "F112.jpg",
    "F113.jpg",
    "F114.jpg",
    "F115.jpg",
    "F116.jpg",
    "F117.jpg",
    "F118.jpg",
    "F119.jpg",
    "F120.jpg",
    "F121.jpg",
    "F122.jpg",
    "F123.jpg",
    "F124.jpg",
    "F125.jpg",
    "F126.jpg",
    "F127.jpg",
    "F128.jpg",
    "F129.jpg",
    "F130.jpg",
    "F131.jpg",
    "F132.jpg",
    "F133.jpg",
    "F134.jpg",
    "F134_A.jpg",
    "D01.webp",
    "D02.jpg",
    "D03.webp",
    "D04.png",
    "D05.png",
    "D06.avif",
    "D07.avif",
    "D08.jpg",
    "D09.png",
    "D10.webp",
    "D11.png",
    "D12.jpg",
    "D13.webp",
    "D14.png",
    "D15.avif",
    "D16.webp",
    "D17.webp",
    "D18.png",
    "D18_A.jpg",
    "D19.webp",
    "D20.webp",
    "D21.webp",
    "D23.jpg",
    "D24.jpg",
    "D25.webp",
    "D26.png",
    "D27.jpg",
    "D28.avif",
    "D29.png",
    "D30.png",
    "D31.avif",
    "D32.jpg",
    "D33.jpg",
    "D34.jpg",
    "D35.png",
    "D36.webp",
    "D37.avif",
    "D38.jpg",
    "D40.jpg",
    "D42.jpg",
    "W01.avif",
    "W02.avif",
    "W03.avif",
    "W04.avif",
    "W05.webp",
    "W06.webp",
    "W07.png",
    "S01.webp",
    "S02.webp",
    "S03.png",
    "S04.jpg",
    "S05.jpg",
    "S06.jpg",
    "S07.webp",
    "S08.jpg",
    "S09.jpg",
    "S10.jpg",
    "S11.webp",
    "S12.avif",
    "S13.jpg",
    "S14.jpg",
    "SW1.png",
    "SW2.png",
    "SW3.jpg",
    "SW4.webp",
    "SW5.png",
    "SW6.png",
    "F_A.jpg",
    "F_B.jpg",
    "S_15.jpg",
    "F040_A.jpg",
  ]);
  const menu = [
    {
      type: "ម្ហូបប្រចាំហាង",
      items: [
        {
          name: "ឈុតប៊ូហ្វេ",
          img: images["F_A.jpg"],
          prices: { ចានធំ: "$" },
        },
        {
          name: "ឈុតប៊ូហ្វេ",
          img: images["F_B.jpg"],
          prices: { ចានធំ: "$" },
        },
        {
          name: "សាច់គោផ្ដាច់ប្រលឹង",
          img: images["F001.jpg"],
          prices: { ចានធំ: "$6.00" },
        },
        {
          name: "សាច់គោលើជ្រុញ",
          img: images["F002.jpg"],
          prices: { ចានធំ: "$7.20" },
        },
        {
          name: "បង្កងឆាពងទាប្រៃ",
          img: images["F03_A.jpg"],
          prices: { ចានធំ: "$10.00" },
        },
        {
          name: "បង្គារឆាពងទាប្រៃ",
          img: images["F04_A.jpg"],
          prices: { ចានធំ: "$8.00" },
        },
        {
          name: "ក្ដាមឆាពងទាប្រៃ",
          img: images["F02_A.jpg"],
          prices: { ចានធំ: "$10.00" },
        },
        {
          name: "ត្រីបណ្ដើរកូន",
          img: images["F003.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ប្រហិតត្រីចៀន",
          img: images["F005.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "ពោតលីងពងទាប្រៃ",
          img: images["F006.jpg"],
          prices: { ចានធំ: "$4.80" },
        },
        {
          name: "ជ្រក់ជើងមាន់",
          img: images["F007.jpeg"],
          prices: { ចានធំ: "$4.30" },
        },
        {
          name: "ជ្រក់ត្រចៀកជ្រូក",
          img: images["F008.jpg"],
          prices: { ចានធំ: "$4.70" },
        },
        {
          name: "មាន់បំពងចេកខ្ចី",
          img: images["F009.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
      ],
    },
    {
      type: "គ្រឿងក្លែម",
      items: [
        {
          name: "ងៀតក្របី",
          img: images["F010.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "យាហុឺអាំង",
          img: images["F011.jpg"],
          prices: { ចានធំ: "$5.30" },
        },
        {
          name: "មាន់ជើងបី",
          img: images["F012_A.jpg"],
          prices: { ចានធំ: "$5.30" },
        },
        {
          name: "ពោតលីងបង្គាក្រៀម",
          img: images["F012.jpg"],
          prices: { ចានធំ: "$4.20" },
        },
        {
          name: "ខ្យងប៉ារ៉ាព្រិល",
          img: images["F013.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ខ្យងប៉ារ៉ាក្រឡុកអំបិលម្ទេស",
          img: images["F014.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ជើងមាន់អំបិលម្ទេស",
          img: images["F015.jpg"],
          prices: { ចានធំ: "$3.80" },
        },
        {
          name: "ប្រហិតគ្រប់មុខឆឹងហិរ",
          img: images["F016.jpg"],
          prices: { ចានធំ: "$4.20" },
        },
        {
          name: "ប្រហិតសាច់គោឆឹងហិរ",
          img: images["F017.jpg"],
          prices: { ចានធំ: "$4.20" },
        },
        {
          name: "ដំឡូងបារាំងបំពង",
          img: images["F018.jpg"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "ឈុតដំឡូងឆាបចម្រុះ",
          img: images["F019.jpg"],
          prices: { ចានធំ: "$3.20" },
        },
        {
          name: "ចេកខ្ចីបំពង",
          img: images["F020.jpg"],
          prices: { ចានធំ: "$2.80" },
        },
        {
          name: "ម្កាក់ក្រឡុក",
          img: images["F021.jpg"],
          prices: { ចានធំ: "$2.80" },
        },
        {
          name: "ស្វាយក្រឡុក",
          img: images["F022.jpg"],
          prices: { ចានធំ: "$2.50" },
        },
      ],
    },
    {
      type: "ម្ហូបភ្លា និងញាំ",
      items: [
        {
          name: "ខាត់ណាទឹកភ្នែក",
          img: images["F023.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "ភ្លាសាច់គោ",
          img: images["F024.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "បុកសាច់គោអាំងសណ្ដែកគួរ",
          img: images["F025.jpg"],
          prices: { ចានធំ: "$5.90" },
        },
        {
          name: "ភ្លាសាច់គោបាត់ដំបង",
          img: images["F026.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ភ្លាងាវ",
          img: images["F027.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "បង្គាកោះកុង",
          img: images["F028.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ភ្លាបង្គាស្រស់",
          img: images["F029.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ភ្លាក្ដាមសេះ",
          img: images["F030.jpg"],
          prices: { ចានធំ: "$6.20" },
        },
        {
          name: "ញាំមីសួរគ្រឿងសមុទ្រ",
          img: images["F031.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "ញាំស្វាយត្រីឆ្អើរ",
          img: images["F032.jpg"],
          prices: { ចានធំ: "$4.70" },
        },
        {
          name: "ភ្លាក្ដាមប្រៃ",
          img: images["F033.jpg"],
          prices: { ចានធំ: "$3.90" },
        },
        {
          name: "បុកងាវ",
          img: images["F034.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
      ],
    },
    {
      type: "ត្រី និងអយស្ទ័រ",
      items: [
        {
          name: "ឈុតសាសុីមី ចម្រុះ",
          img: images["F035.jpg"],
          prices: { ចានធំ: "$13.80" },
        },
        {
          name: "ត្រីសាម៉ុនស្រស់",
          img: images["F036.jpg"],
          prices: { ចានធំ: "$12.00" },
        },
        {
          name: "អយស្ទ័រអាំងប័រ",
          img: images["F037.jpg"],
          prices: { ចានធំ: "$10.20" },
        },
        {
          name: "អយស្ទ័រស្រស់",
          img: images["F040_A.jpg"],
          prices: { ចានធំ: "$10.20" },
        },
        {
          name: "អយស្ទ័រអាំងអំបិលម្ទេស",
          img: images["F039.jpg"],
          prices: { ចានធំ: "$10.20" },
        },
        {
          name: "អយស្ទ័រអាំងបែបជប៉ុន",
          img: images["F040.jpg"],
          prices: { ចានធំ: "$10.50" },
        },
        {
          name: "ញាំត្រីសាម៉ុន",
          img: images["F041.jpg"],
          prices: { ចានធំ: "$10.50" },
        },
        {
          name: "បុកត្រីសាម៉ុន",
          img: images["F042.jpg"],
          prices: { ចានធំ: "$10.80" },
        },
        {
          name: "ត្រីក្រហមចំហុយទឹកសុីអីវ",
          img: images["F043.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ត្រីរ៉ស់បឹងកញ្ឆេត",
          img: images["F044.jpg"],
          prices: { ចានធំ: "$8.20" },
        },
        {
          name: "ត្រីក្រហមចំហុយក្រូចឆ្មា",
          img: images["F045.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ត្រីក្រហមចំហុយមីសួរ",
          img: images["F046.jpg"],
          prices: { ចានធំ: "$8.20" },
        },
        {
          name: "ត្រីក្រហមបំពងតុងយាំ",
          img: images["F047.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
      ],
    },
    {
      type: "បាយឆា និង មីឆា",
      items: [
        {
          name: "បាយឆាគ្រឿងសមុទ្រ",
          img: images["F048.jpg"],
          prices: { ចានតូច: "$5.70", ចានធំ: "$9.20" },
        },
        {
          name: "បាយយ៉ាងចូវ",
          img: images["F049.jpg"],
          prices: { ចានតូច: "$5.50", ចានធំ: "$9.20" },
        },
        {
          name: "បាយឆាម្រះព្រៅ",
          img: images["F050.jpg"],
          prices: { ចានតូច: "$5.30", ចានធំ: "$8.70" },
        },
        {
          name: "បាយឆាសាច់គោ",
          img: images["F051.jpg"],
          prices: { ចានតូច: "$5.30", ចានធំ: "$8.70" },
        },
        {
          name: "បាយឆាឡុកឡាក់",
          img: images["F052.jpg"],
          prices: { ចានតូច: "$5.50", ចានធំ: "$9.20" },
        },
        {
          name: "បាយស",
          img: images["F053.jpg"],
          prices: { ចានធំ: "$0.50" },
        },
        {
          name: "បាយឆាត្រីប្រម៉ា",
          img: images["F054.jpg"],
          prices: { ចានតូច: "$5.00", ចានធំ: "$8.20" },
        },
        {
          name: "បាយឆាក្ដាម",
          img: images["F055.jpg"],
          prices: { ចានតូច: "$6.20", ចានធំ: "$10.30" },
        },
        {
          name: "មីល្ពៅឆាគ្រឿងសមុទ្រ",
          img: images["F056.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "មីល្ពៅឆាសាច់គោ",
          img: images["F057.jpg"],
          prices: { ចានធំ: "$5.30" },
        },
        {
          name: "មីល្ពៅឆាម្រះព្រៅសាច់គោ",
          img: images["F058.jpg"],
          prices: { ចានធំ: "$5.30" },
        },
      ],
    },
    {
      type: "ម្ហូបអាំង",
      items: [
        {
          name: "សាច់គោអាំងទឹកប្រហុក",
          img: images["F059.jpg"],
          prices: { ចានធំ: "$6.20" },
        },
        {
          name: "ក្រចកជើងគោអាំងអំបិលម្ទេស",
          img: images["F060.jpg"],
          prices: { ចានធំ: "$7.70" },
        },
        {
          name: "ត្រីសាមបាក់អាំងអំបិលម្ទេស",
          img: images["F061.jpg"],
          prices: { ចានធំ: "$6.30" },
        },
        {
          name: "ត្រីសាមបាក់អាំងបែបជប៉ុន",
          img: images["F062.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "ក្ដាមអាំងអំបិលម្ទេស",
          img: images["F063.jpg"],
          prices: { ចានធំ: "$8.20" },
        },
        {
          name: "បបែលអាំងអំបិលម្ទេស",
          img: images["F064.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "ព្រុយត្រីអាំងអំបិលម្ទេស",
          img: images["F065.jpg"],
          prices: { ចានធំ: "$4.80" },
        },
        {
          name: "បង្គាអាំងអំបិលម្ទេស",
          img: images["F066.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "បង្គាអាំងបែបចិន",
          img: images["F067.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "មឹកអាំងអំបិលម្ទេស",
          img: images["F068.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "មឹកអាំងបែបចិន",
          img: images["F069.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ខ្យងអាំងអំបិលម្ទេស",
          img: images["F070.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "ខ្យងផ្លិតអាំងបែបជប៉ុន",
          img: images["F071.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ខ្យងផ្លិតអាំងស្លឹកខ្ទឹម",
          img: images["F072.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "អន្ទង់អាំងសាសគិ",
          img: images["F073.webp"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "អន្ទង់អាំងអំបិលម្ទេស",
          img: images["F074.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
      ],
    },
    {
      type: "ម្ហូបឆា",
      items: [
        {
          name: "លៀសហូលឆាហិរ",
          img: images["F075.jpg"],
          prices: { ចានធំ: "$4.20" },
        },
        {
          name: "លៀសហូលឆាតុងយាំ",
          img: images["F076.jpg"],
          prices: { ចានធំ: "$4.20" },
        },
        {
          name: "ងាវឆាអំពិលទុំ",
          img: images["F077.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "បង្គាឆាម្រេចខ្ចី",
          img: images["F078.jpg"],
          prices: { ចានធំ: "$5.90" },
        },
        {
          name: "ក្ដាមឆាម្រេចខ្ចី",
          img: images["F079.jpg"],
          prices: { ចានធំ: "$6.20" },
        },
        {
          name: "មឹកឆាម្រេចខ្ចី",
          img: images["F080.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "មឹកឆាបន្ទះដែក",
          img: images["F081.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "សាច់គោឆាបន្ទះដែក",
          img: images["F082.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "សាច់គោឆាពងអង្រ្កង",
          img: images["F083.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "កង្កែបរាំឌីស្គូ",
          img: images["F084.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "កង្កែបឆាក្ដៅ",
          img: images["F085.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "មាន់ឆាក្ដៅ",
          img: images["F086.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "អន្ទង់ឆាក្ដៅ",
          img: images["F087.jpg"],
          prices: { ចានធំ: "$6.30" },
        },
        {
          name: "មាន់រំលីងគល់ស្លឹកគ្រៃ",
          img: images["F088.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "មាន់រំលីងអំបិលម្ទេស",
          img: images["F089.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "សរសៃកែងឆាទឹកសុីអីវ",
          img: images["F090.jpg"],
          prices: { ចានធំ: "$5.00" },
        },
      ],
    },
    {
      type: "ម្ហូបបំពង",
      items: [
        {
          name: "សាច់គោបំពងល្ង",
          img: images["F091.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "ជង្គង់មាន់បំពងខ្ទឹមស",
          img: images["F092.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "ជើងមាន់បំពងខ្ទឹមស",
          img: images["F093.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "សរសៃកែងបំពងខ្ទឹមស",
          img: images["F094.jpg"],
          prices: { ចានធំ: "$5.00" },
        },
        {
          name: "កង្កែបបំពងខ្ទឹមស",
          img: images["F095.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "បង្គាបំពងខ្ទឹមស",
          img: images["F096.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "សាច់ជ្រូកបីជាន់បំពង",
          img: images["F097.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "បង្គាបំពងម្សៅ",
          img: images["F098.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "បង្គាបំពងហិរ",
          img: images["F099.jpg"],
          prices: { ចានធំ: "$6.80" },
        },
        {
          name: "កង្កែបរ៉ូទី",
          img: images["F100.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "កង្កែបប៉ារ៉ា",
          img: images["F101.jpg"],
          prices: { ចានធំ: "$4.90" },
        },
      ],
    },
    {
      type: "ប្រភេទបុក",
      items: [
        {
          name: "បុកល្ហុងស្រុកស្រែ",
          img: images["F102.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "បុកល្ហុងបង្គាស្រស់",
          img: images["F103.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "បុកល្ហុងក្ដាមសេះ",
          img: images["F104.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "បុកល្ហុងក្ដាមប្រៃ",
          img: images["F105.jpg"],
          prices: { ចានធំ: "$4.30" },
        },
        {
          name: "ស្លាបមាន់អាំង",
          img: images["F106.jpg"],
          prices: { ចានធំ: "$3.20" },
        },
        {
          name: "នំបញ្ចុក",
          img: images["F107.jpg"],
          prices: { ចានធំ: "$0.75" },
        },
      ],
    },
    {
      type: "ម្ហូបស្រុះ និងអប់ឆ្នាំងដី",
      items: [
        {
          name: "ងាវស្រុះ",
          img: images["F108.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "ខ្យងប៉ារ៉ាស្រុះ",
          img: images["F109.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "បង្គាស្រុះ",
          img: images["F110.jpg"],
          prices: { ចានធំ: "$5.20" },
        },
        {
          name: "ត្រីសាមបាក់អប់គល់ស្លឹកគ្រៃ",
          img: images["F111.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "ងាវអប់",
          img: images["F112.jpg"],
          prices: { ចានធំ: "$5.70" },
        },
        {
          name: "បង្គាអប់មីសួរ",
          img: images["F113.jpg"],
          prices: { ចានធំ: "$5.90" },
        },
        {
          name: "ក្ដាមអប់មីសួរ",
          img: images["F114.jpg"],
          prices: { ចានធំ: "$6.50" },
        },
        {
          name: "គ្រឿងសមុទ្រអប់មីសួរ",
          img: images["F115.jpg"],
          prices: { ចានធំ: "$8.50" },
        },
        {
          name: "អន្ទង់អប់ត្រយ៉ូងចេក",
          img: images["F116.jpg"],
          prices: { ចានធំ: "$6.30" },
        },
      ],
    },
    {
      type: "ម្ហូបស៊ុប",
      items: [
        {
          name: "ខ្យងប៉ារ៉ាខ្ទិះ",
          img: images["F117.jpg"],
          prices: { ចានធំ: "$7.80" },
        },
        {
          name: "ស្ងោរជ្រក់ខ្យងហូល",
          img: images["F118.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "ស៊ុបខ្ទិះខ្យងហូល",
          img: images["F119.jpg"],
          prices: { ចានធំ: "$5.50" },
        },
        {
          name: "ស្ងោរជ្រក់សាច់គោ",
          img: images["F120.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "សម្លតុងយាំគ្រឿងសមុទ្រ",
          img: images["F121.jpg"],
          prices: { ចានធំ: "$6.80" },
        },
        {
          name: "សម្លតុងយាំបង្គា",
          img: images["F122.jpg"],
          prices: { ចានធំ: "$6.20" },
        },
        {
          name: "ស៊ុបក្រពះជ្រូក ប្រហិតត្រី",
          img: images["F123.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "ស៊ុបក្ដាមពិសេស",
          img: images["F124.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
        {
          name: "បបរសាមចូក",
          img: images["F125.jpg"],
          prices: { ចានធំ: "$5.80" },
        },
      ],
    },
    {
      type: "បន្លែ",
      items: [
        {
          name: "បន្លែឆាគ្រប់មុខ",
          img: images["F126.jpg"],
          prices: { ចានធំ: "$4.50" },
        },
        {
          name: "ខាត់ណាឆាប្រេងខ្យង",
          img: images["F127.jpg"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "កញ្ឆែតឆាប្រេងខ្យង",
          img: images["F128.jpg"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "ត្រកួនឆាប្រេងខ្យង",
          img: images["F129.jpg"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "ឆាត្រួយល្ពៅ",
          img: images["F130.jpg"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "ផ្លែឈើខួបកំណើត",
          img: images["F131.jpg"],
          prices: { ចានធំ: "$9.50" },
        },
      ],
    },
    {
      type: "ម្ហូបសម្រាប់ក្មេង",
      items: [
        {
          name: "Chicken Nuggets",
          img: images["F132.jpg"],
          prices: { ចានធំ: "$4.00" },
        },
        {
          name: "ប្រហិតចៀនចម្រុះ",
          img: images["F133.jpg"],
          prices: { ចានធំ: "$3.80" },
        },
        {
          name: "ប្រហិតសាច់គោចៀន",
          img: images["F134_A.jpg"],
          prices: { ចានធំ: "$4.00" },
        },
        {
          name: "ការ៉េម",
          img: images["F134.jpg"],
          prices: { ចានធំ: "$2.00" },
        },
      ],
    },
    {
      type: "បញ្ជីស្រាបៀរ",
      items: [
        {
          name: "ABC",
          img: images["D01.webp"],
          prices: { ចានធំ: "$3.20" },
        },
        {
          name: "ABC Reserve",
          img: images["D02.jpg"],
          prices: { ចានធំ: "$3.60" },
        },
        {
          name: "Anchor",
          img: images["D03.webp"],
          prices: { ចានធំ: "$2.10" },
        },
        {
          name: "Angkor",
          img: images["D04.png"],
          prices: { ចានធំ: "$2.10" },
        },
        {
          name: "Blanc",
          img: images["D05.png"],
          prices: { ចានធំ: "$3.20" },
        },
        {
          name: "Budweiser Aluminium",
          img: images["D06.avif"],
          prices: { ចានធំ: "$4.00" },
        },
        {
          name: "Budweiser",
          img: images["D07.avif"],
          prices: { ចានធំ: "$2.60" },
        },
        {
          name: "Budweiser Quart",
          img: images["D08.jpg"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Cambodia Premium Draft",
          img: images["D09.png"],
          prices: { ចានធំ: "$2.30" },
        },
        {
          name: "Carlsberg",
          img: images["D10.webp"],
          prices: { ចានធំ: "$2.50" },
        },
        {
          name: "Chang Large",
          img: images["D11.png"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Chang Small",
          img: images["D12.jpg"],
          prices: { ចានធំ: "$2.50" },
        },
        {
          name: "Corona",
          img: images["D13.webp"],
          prices: { ចានធំ: "$3.00" },
        },
        {
          name: "Coronita",
          img: images["D14.png"],
          prices: { ចានធំ: "$2.50" },
        },
        {
          name: "Guinness",
          img: images["D15.avif"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "Hanuman Black",
          img: images["D16.webp"],
          prices: { ចានធំ: "$2.50" },
        },
        {
          name: "Hanuman Lager",
          img: images["D17.webp"],
          prices: { ចានធំ: "$2.30" },
        },
        {
          name: "Heineken",
          img: images["D18_A.jpg"],
          prices: { ចានធំ: "$2.70" },
        },
        {
          name: "Hoegaarden Rosee Bottle",
          img: images["D19.webp"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "Hoegaarden White Bottle",
          img: images["D20.webp"],
          prices: { ចានធំ: "$3.50" },
        },
        {
          name: "Hoegaarden Rosee Draught 330ml",
          img: images["D21.webp"],
          prices: { ចានធំ: "$3.80" },
        },
        {
          name: "Hoegaarden Rosee Draught 3L",
          img: images["D24.jpg"],
          prices: { ចានធំ: "$37.50" },
        },
        {
          name: "Hoegaarden White Draught 330ml",
          img: images["D23.jpg"],
          prices: { ចានធំ: "$3.80" },
        },
        {
          name: "Hoegaarden White Draught 3L",
          img: images["D24.jpg"],
          prices: { ចានធំ: "$37.50" },
        },
        {
          name: "San Miguel",
          img: images["D25.webp"],
          prices: { ចានធំ: "$3.00" },
        },
        {
          name: "San Miguel Light",
          img: images["D26.png"],
          prices: { ចានធំ: "$3.00" },
        },
        {
          name: "Singha Small",
          img: images["D27.jpg"],
          prices: { ចានធំ: "$2.60" },
        },
        {
          name: "Singha Large",
          img: images["D28.avif"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Singha Reserve Large",
          img: images["D29.png"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Singha Can",
          img: images["D30.png"],
          prices: { ចានធំ: "$1.90" },
        },
        {
          name: "Tiger",
          img: images["D31.avif"],
          prices: { ចានធំ: "$2.20" },
        },
        {
          name: "Tiger Crystal",
          img: images["D32.jpg"],
          prices: { ចានធំ: "$2.50" },
        },
        {
          name: "Tiger Soju",
          img: images["D33.jpg"],
          prices: { ចានធំ: "$2.70" },
        },
        {
          name: "Jinro Chamisul",
          img: images["D34.jpg"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Jinro Greengrape",
          img: images["D35.png"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Jinro Strawberry",
          img: images["D36.webp"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Jinro Peach",
          img: images["D37.avif"],
          prices: { ចានធំ: "$4.90" },
        },
        {
          name: "Jim Beam Kiwi",
          img: images["D38.jpg"],
          prices: { ចានធំ: "$7.50" },
        },
        { name: "Jim Beam Passion", img: "", prices: { ចានធំ: "$7.50" } },
        {
          name: "Jim Beam Strawberry",
          img: images["D40.jpg"],
          prices: { ចានធំ: "$7.50" },
        },
        {
          name: "Jim Beam Butterfly Flavor",
          img: "",
          prices: { ចានធំ: "$7.50" },
        },
        {
          name: "Hanuman Larger Draught 3L",
          img: images["D42.jpg"],
          prices: { ចានធំ: "$13.90" },
        },
      ],
    },
    {
      type: "Whisky",
      items: [
        {
          name: "Ballantine's 700ml",
          img: images["W01.avif"],
          prices: { ចានធំ: "$21.50" },
        },
        {
          name: "Ballantine's 1000ml",
          img: images["W02.avif"],
          prices: { ចានធំ: "$25.50" },
        },
        {
          name: "Chivas Regal 18 Year ",
          img: images["W03.avif"],
          prices: { ចានធំ: "$180.00" },
        },
        {
          name: "Hennessy V.S.O.P",
          img: images["W04.avif"],
          prices: { ចានធំ: "$130.00" },
        },
        {
          name: "jack daniel's",
          img: images["W05.webp"],
          prices: { ចានធំ: "$48.00" },
        },
        {
          name: "Jim Beam Honey 75cl",
          img: images["W06.webp"],
          prices: { ចានធំ: "$29.50" },
        },
        {
          name: "Jim Beam White 75cl",
          img: images["W07.png"],
          prices: { ចានធំ: "$29.50" },
        },
      ],
    },
    {
      type: "Soft Drinks",
      items: [
        {
          name: "7Up",
          img: images["S01.webp"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Coca",
          img: images["S02.webp"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Fanta",
          img: images["S03.png"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Fuze Tea",
          img: images["S04.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Oishi",
          img: images["S05.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Oishi Soda",
          img: images["S06.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Pepsi",
          img: images["S07.webp"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Predator",
          img: images["S08.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Red Bull",
          img: images["S09.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Samurai",
          img: images["S10.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Winter Melon Tea",
          img: images["S11.webp"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Soda",
          img: images["S12.avif"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Sprite",
          img: images["S13.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "តែចិនជេងប៊ូឡាំង",
          img: images["S14.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "ទឹកផ្លែឈើ",
          img: images["S_15.jpg"],
          prices: { ចានធំ: "$1.00" },
        },
      ],
    },
    {
      type: "Water",
      items: [
        {
          name: "Cambodia Water",
          img: images["SW1.png"],
          prices: { ចានធំ: "$0.50" },
        },
        {
          name: "Dasani Water",
          img: images["SW2.png"],
          prices: { ចានធំ: "$0.50" },
        },
        {
          name: "Angkor Puro",
          img: images["SW3.jpg"],
          prices: { ចានធំ: "$0.50" },
        },
        {
          name: "Vital Water",
          img: images["SW4.webp"],
          prices: { ចានធំ: "$0.50" },
        },
        {
          name: "Elan Miniral Water",
          img: images["SW5.png"],
          prices: { ចានធំ: "$1.00" },
        },
        {
          name: "Kulen Water",
          img: images["SW6.png"],
          prices: { ចានធំ: "$1.00" },
        },
      ],
    },
  ];

  function generateMenu(menu) {
    let html = "";
    menu.forEach((section) => {
      html += `<div class="mb-4"><h2 class="text-2xl underline p-4 font-bold xl:text-4xl dark:text-white">${section.type}</h2><div class="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">`;
      section.items.forEach((item) => {
        // Ensure that prices are defined and is an object
        const prices = item.prices || {};
        const sizes = Object.keys(prices);
        const multipleSizes = sizes.length > 1;

        html += `
                  <div class="rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                      <img class="h-32 lg:h-56 xl:h-56 w-full object-cover" src="${
                        item.img
                      }" alt="${item.name}" loading="lazy">
                      <div class="pt-6">
                          <div class="text-xl lg:text-2xl font-semibold leading-tight text-gray-900 dark:text-white">${
                            item.name
                          }</div>
                          
                          <!-- Size -->
                          ${
                            multipleSizes
                              ? `
                          <ul class="mt-4 flex items-center justify-between gap-4">
                              <li class="flex items-center gap-2">
                                  <p class="text-sm lg:text-lg font-medium text-gray-500 dark:text-gray-400">ចានតូច</p>
                              </li>
                              <li class="flex items-center gap-2">
                                  <p class="text-sm lg:text-lg font-medium text-gray-500 dark:text-gray-400">ចានធំ</p>
                              </li>
                          </ul>`
                              : ""
                          }
                          
                          <!-- Price -->
                          <div class="mt-4 flex items-center justify-between gap-4">
                              ${
                                multipleSizes
                                  ? `
                              <p class="text-lg lg:text-2xl font-extrabold leading-tight text-red-500 dark:text-white">${prices["ចានតូច"]}</p>
                              <p class="text-lg lg:text-2xl font-extrabold leading-tight text-red-500 dark:text-white">${prices["ចានធំ"]}</p>`
                                  : `
                              <p class="text-lg lg:text-2xl font-extrabold leading-tight text-red-500 dark:text-white">${
                                prices[sizes[0]] || "Price not available"
                              }</p>`
                              }
                          </div>
                      </div>
                  </div>
              `;
      });
      html += `</div></div>`;
    });
    document.getElementById("menu").innerHTML = html;
  }

  return (
    <div>
      <header class="bg-gray-50 py-6 dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 flex flex-col md:flex-col items-center justify-between">
          <div class="flex-1 mb-4 md:mb-0">
            <img
              src={images["logo.jpg"]}
              alt="Restaurant Logo"
              class="h-18 md:h-48"
            />
          </div>

          <div class="flex-1 text-center">
            <h1 class="text-4xl mt-6 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
              ស្នាដៃម៉ាម៉ា ឆ្ញាញ់ ឆ្ញាញ់
            </h1>
            <p class="text-lg font-medium pt-4 text-gray-600 dark:text-gray-400">
              Address: ឬស្សីកែវ , សង្កាត់ស្វាយប៉ាក
            </p>
            <p class="text-lg font-medium text-gray-600 dark:text-gray-400">
              Tel: 081 577 772 / 067 577 772 / <br></br>099 577 772
            </p>
          </div>
          <div class="flex-1"></div>
        </div>
      </header>

      <section class="bg-gray-50 py-2 antialiased dark:bg-gray-900 md:py-12">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Menu Food
          </h1>
          <div id="menu"></div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
