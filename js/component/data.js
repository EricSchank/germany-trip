define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(data);

  /**
   * Module function
   */

  function data() {
    var cities = {};
    var pics = [];

    this.defaultAttrs({

    });

    this.pics = function (e, d) {
      var res = pics;
      if(d && d.city) {
        res = cities[d.city];
      }
      this.trigger('picsData', {type: 'pic', data: res});
    };

    this.cities = function () {
      this.trigger('citiesData', {type: 'city', data: cities});
    };

    this.addPic = function(pic) {
      pics.push(pic);
      var c = cities[pic.city];
      if(!c) {
        c = [];
        cities[pic.city] = c;
      }
      c.push(pic);
    };

    this.loadData = function () {

this.addPic({ title: "From my room in the Bansimer's house", src: 'https://lh4.googleusercontent.com/-23JJrYBa6o4/U7nmBD-Ou1I/AAAAAAAAFLY/or0g1XuMKn0/IMG_2158.JPG', city: 'Hannover' });
this.addPic({ title: "My room in the Bansimer's house", src: 'https://lh4.googleusercontent.com/-78PPGr2Pg8Y/U7nmBGdiFII/AAAAAAAAFLY/nFqwMA0LBoI/IMG_2165.JPG', city: 'Hannover' });
this.addPic({ title: "Hannover City Hall", src: 'https://lh4.googleusercontent.com/-vlphmB9ddzk/U7nmBKOO8uI/AAAAAAAAFLY/Of7Ha97Ueiw/IMG_2175.jpg', city: 'Hannover' });
this.addPic({ title: "Hannover City Hall", src: 'https://lh6.googleusercontent.com/-33mbxP0XkDs/U7nmBAi4q_I/AAAAAAAAFLY/irmq5DEBdak/IMG_2183.JPG', city: 'Hannover' });
this.addPic({ title: "Lake behind Hannover City Hall", src: 'https://lh3.googleusercontent.com/-2w4Hnj_fCFM/U7nmBBfRQeI/AAAAAAAAFLY/Kds0PLRJ3es/IMG_2190.JPG', city: 'Hannover' });
this.addPic({ title: "Hannover City Hall", src: 'https://lh4.googleusercontent.com/-6nKIHoy9vws/U7nmBDW-KWI/AAAAAAAAFLY/t7woSglpN0I/IMG_2192.JPG', city: 'Hannover' });
this.addPic({ title: "Hannover City Hall", src: 'https://lh6.googleusercontent.com/-2ov-kyxX7lc/U7nmBAN4T0I/AAAAAAAAFLY/qnu4FVMoxqk/IMG_2194.JPG', city: 'Hannover' });
this.addPic({ title: "Maschsee, Hannover", src: 'https://lh4.googleusercontent.com/-t3ugL_eZado/U7nmBAOGOjI/AAAAAAAAFLY/IieVjiqTB-g/IMG_2198.JPG', city: 'Hannover' });
this.addPic({ title: "Side of Marktkirche", src: 'https://lh5.googleusercontent.com/-MAyQIpfz6bU/U7nmBN9XSAI/AAAAAAAAFLY/niFsPyAbVhg/IMG_2229.JPG', city: 'Hannover' });
this.addPic({ title: "Hannover", src: 'https://lh6.googleusercontent.com/-bhivsIHJdro/U7nmBC7YzCI/AAAAAAAAFLY/PScQXRPH2F8/IMG_2232.jpg', city: 'Hannover' });
this.addPic({ title: "Marktkirche (in background)", src: 'https://lh4.googleusercontent.com/-VD0tytRLFEA/U7nmBI_2zlI/AAAAAAAAFLY/yzxST-823wE/IMG_2240.JPG', city: 'Hannover' });
this.addPic({ title: "Marstalltor, Hannover 1716 city wall", src: 'https://lh6.googleusercontent.com/-dzN9XuiQwvM/U7nmBNlQohI/AAAAAAAAFLY/6vA0CktGoiA/IMG_2250.jpg', city: 'Hannover' });
this.addPic({ title: "Our booth at CeBIT", src: 'https://lh3.googleusercontent.com/-OedwC5cg8Nk/U7nmBOzVs0I/AAAAAAAAFLY/QG5S_gcH1rw/IMG_2278.JPG', city: 'Hannover' });
this.addPic({ title: "Munich Hall beer tent @ CeBIT", src: 'https://lh4.googleusercontent.com/-4NLHM6_USJo/U7nmBC2KOyI/AAAAAAAAFLY/hVQ6PExghQ0/IMG_2292.JPG', city: 'Hannover' });
this.addPic({ title: "One leg of the pavilion at CeBIT", src: 'https://lh3.googleusercontent.com/-BCzWxQaGHWQ/U7nmBLhNwuI/AAAAAAAAFLY/-1dgPXfIhY0/IMG_2350.jpg', city: 'Hannover' });
this.addPic({ title: 'Munich beer "tent" at CeBIT', src: 'https://lh5.googleusercontent.com/-qyXR7C8Nr-I/U7nmBMdLWvI/AAAAAAAAFLY/SIqiAzvRaXA/IMG_2382.jpg', city: 'Hannover' });
this.addPic({ title: "Jägerschnitzel und Spätzle und Salat", src: 'https://lh6.googleusercontent.com/-T7odnSV0AUk/U7nmBCdgDrI/AAAAAAAAFLY/NReRAAuMepw/IMG_2415.jpg', city: 'Hannover' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-vI0ResOKMug/U7nmBCmPzOI/AAAAAAAAFLY/2pMWr9WZ5mE/IMG_8319.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-2iXql1tepBU/U7nmBMQpXBI/AAAAAAAAFLY/zoYa_134j6U/IMG_8320.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-sKEXGoXzL2s/U7nmBMScW0I/AAAAAAAAFLY/3Wxu76dtkUg/IMG_8333.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-4a8vo_Al37U/U7nmBDOgk9I/AAAAAAAAFLY/DK2bWjpWRbA/IMG_8341.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-DlJ6L8Olgsk/U7nmBM14vrI/AAAAAAAAFLY/tHYLmBYBFDY/IMG_8383.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-oq-yL_9pVEY/U7nmBB5xuvI/AAAAAAAAFLY/uTbBQlqpyUg/IMG_8394.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-B28I3PgvEOc/U7nmBBSVjBI/AAAAAAAAFLY/aLFgAY1QqTU/IMG_8397.JPG', city: 'Augsburg' });
this.addPic({ title: "City hall under renovation", src: 'https://lh3.googleusercontent.com/-9NIFfGTAFq4/U7nmBHxVNSI/AAAAAAAAFLY/OrjVBR6pP4k/IMG_8419.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-aXorAa1icCk/U7nmBCzzqwI/AAAAAAAAFLY/KN0TXbfaoeY/IMG_8431.jpg', city: 'Augsburg' });
this.addPic({ title: "At dinner", src: 'https://lh6.googleusercontent.com/-tYOOmN1Bn90/U7nmBJhAH1I/AAAAAAAAFLY/UA0qH9fPcDg/IMG_2430.jpg', city: 'Augsburg' });
this.addPic({ title: "Kristen eating Nürnberger Würst", src: 'https://lh5.googleusercontent.com/-hO4Y3b3_rFU/U7nmBN2_oQI/AAAAAAAAFLY/2OKS4LwGM9c/IMG_2429.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-bC_13xK2w3E/U7nmBLkRaGI/AAAAAAAAFLY/vQPHpY79gsA/IMG_8465.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-LmOKE7JVpQM/U7nmBH1vHTI/AAAAAAAAFLY/gOlWFR04NKA/IMG_2453.JPG', city: 'Augsburg' });
this.addPic({ title: "Perlach Tower", src: 'https://lh6.googleusercontent.com/-ah_e6p7Dlq8/U7nmBHBAWlI/AAAAAAAAFLY/iDDIM_jSy3s/IMG_8551.jpg', city: 'Augsburg' });
this.addPic({ title: "City Hall", src: 'https://lh5.googleusercontent.com/-i6bJlh5EFoo/U7nmBI3fn0I/AAAAAAAAFLY/zZLPGhm-BOE/IMG_8553.jpg', city: 'Augsburg' });
this.addPic({ title: "E in front of our house", src: 'https://lh4.googleusercontent.com/-WD2OcWnmT10/U7nmBPFGd9I/AAAAAAAAFLY/tVWFOG9lk-8/IMG_2476.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-eoCGkQNPDIU/U7nmBNoMkxI/AAAAAAAAFLY/Y0mWsTSX3rk/IMG_8577.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-4ZozjKH3wOo/U7nmBBDxwBI/AAAAAAAAFLY/ve7IkIx5MSU/IMG_8596.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/--6g2VpmIu58/U7nmBJMSmdI/AAAAAAAAFLY/kv8yO3hb810/IMG_8629.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-oGHtn2HZgiU/U7nmBPCl9nI/AAAAAAAAFLY/_97Z9dSyi9A/IMG_8644.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-Ej1jf-NmaZk/U7nmBO6LVvI/AAAAAAAAFLY/rdB3YSfeuuk/IMG_8647.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-bhcB6RIPAHs/U7nmBI1tTZI/AAAAAAAAFLY/0YLjpCM8aeM/IMG_8655.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-mTUJDGXxmgA/U7nmBNGlNbI/AAAAAAAAFLY/HeAUVmSS96k/IMG_8661.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-WjfNiraLAnI/U7nmBH5y2nI/AAAAAAAAFLY/cw_F3Fqdv_c/IMG_8672.jpg', city: 'Augsburg' });
this.addPic({ title: "The Golden Room in City Hall", src: 'https://lh6.googleusercontent.com/-fq2HrWH8a9A/U7nmBKgEOuI/AAAAAAAAFLY/e1BaSIw0iAY/IMG_2536.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-0AlrVywx2j0/U7nmBJhONPI/AAAAAAAAFLY/1WC53esXNvo/IMG_2538.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-cJ4HciDKqI0/U7nmBIR8wLI/AAAAAAAAFLY/xQuPjwK-H6w/IMG_2542.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-R3tS-RkCsh4/U7nmBJS5IvI/AAAAAAAAFLY/Kr_ckNvW470/IMG_2546-PANO.jpg', city: 'Augsburg' });
this.addPic({ title: "Going to Füßen", src: 'https://lh4.googleusercontent.com/-uWEMciyptTI/U7nmBEZKouI/AAAAAAAAFLY/fpa9CZDyyXQ/IMG_2567.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-7yXaCqPMy3M/U7nmBPdvTNI/AAAAAAAAFLY/fzILAdj4ZwE/IMG_2497.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-td93-PFSbXs/U7nmBLSQClI/AAAAAAAAFLY/JU-oodvMTCE/IMG_2501.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-Qe9CFOgWvMY/U7nmBLQ9TqI/AAAAAAAAFLY/l2n2Ty7T5PI/IMG_2506.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-Ms3cHx4DD6w/U7nmBIAmdII/AAAAAAAAFLY/fMgDbJ1tAZk/IMG_2578.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-B7hn974e_6o/U7nmBCsWJ6I/AAAAAAAAFLY/BeGZWmDTPtA/IMG_2525.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-sTTuLl7Wjuo/U7nmBECNyGI/AAAAAAAAFLY/4sMHVEtFTm0/IMG_2591.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-FSeGDNqB-VM/U7nmBIgPtHI/AAAAAAAAFLY/jf1mKaeJOz8/IMG_2592.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-FLGBMqvoYBU/U7nmBIuzINI/AAAAAAAAFLY/dqcFMKMeHmc/IMG_2594.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-3yaw8BXUemk/U7nmBLsU9HI/AAAAAAAAFLY/AQ6IchbnG4Y/IMG_2601-MOTION.gif', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-0dlb3Bh6nFM/U7nmBG3PtBI/AAAAAAAAFLY/Wzf3Pvpv0Vo/IMG_2538-MOTION.gif', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-FSL2J82EyeA/U7nmBIXvbgI/AAAAAAAAFLY/sIxOSXysoXA/IMG_2551-MOTION.gif', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-h6SUIfrX3vA/U7nmBMCHXQI/AAAAAAAAFLY/JFhjgeVt7Wg/IMG_2609.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-bH-lUIbwrLo/U7nmBPwZLqI/AAAAAAAAFLY/KVDR1vm6mu8/IMG_2620.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-HhIILczKaH0/U7nmBH6JbBI/AAAAAAAAFLY/eoagg_GcPjw/IMG_8771.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-HOqcLSZ56x8/U7nmBKfKxDI/AAAAAAAAFLY/B6m1hw9-V_4/IMG_2630.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-vdc2xGnJ7EU/U7nmBNeN6OI/AAAAAAAAFLY/Q7kz-rgk9sM/IMG_8802.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-jAoEBu1Jero/U7nmBKZaTAI/AAAAAAAAFLY/4AVKFjXTFAo/IMG_8815.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-wQGm6Xdw0sg/U7nmBHoU5UI/AAAAAAAAFLY/1V0Q4zhZRrM/IMG_8826.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-5bdEIp1oOJQ/U7nmBHvpQpI/AAAAAAAAFLY/XaMPFiITMSc/IMG_8898.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-OB6dWOpPFi8/U7nmBHsdaMI/AAAAAAAAFLY/iAe0EAfXVvE/IMG_8919.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-NosOeQsNKC0/U7nmBAma5OI/AAAAAAAAFLY/e-RPqIWLmZo/IMG_8922.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-Y41iFs1uEqI/U7nmBBh84OI/AAAAAAAAFLY/H01Y7Uq2Xm8/IMG_8992.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-vCe14MMuCMs/U7nmBEAc4aI/AAAAAAAAFLY/BYsQwLQ90tQ/IMG_8996.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-TssMYwVxaLA/U7nmBFe51WI/AAAAAAAAFLY/PVosVQoi_ro/IMG_8998.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-0Q0cPSDZyC0/U7nmBDR5jFI/AAAAAAAAFLY/FTE7BBZmLkg/IMG_9021.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-1OTsGlOmQLQ/U7nmBCP3n1I/AAAAAAAAFLY/fQHBkh6cy3A/IMG_9022.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-HLdd1KBCNL4/U7nmBDSqgqI/AAAAAAAAFLY/jd8uSG28OL0/IMG_9030.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-kQMzNeVh1vk/U7nmBImQalI/AAAAAAAAFLY/A078dNDvuP0/IMG_9036.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-H-UW0G-I-q4/U7nmBBgSDYI/AAAAAAAAFLY/sFDkQq1l6gw/IMG_9037.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-h2XQpe8z35s/U7nmBFusKvI/AAAAAAAAFLY/VHIGXpS3NLA/IMG_9039.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-WxCLEFKVjLM/U7nmBKWIHGI/AAAAAAAAFLY/6f_xnlPJrZ8/IMG_9042.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-5Wvf7xq1dLw/U7nmBBeAs0I/AAAAAAAAFLY/0XkQTjMOkmo/IMG_2671.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-j4uGogTYzDU/U7nmBHGi0BI/AAAAAAAAFLY/g22c7kCafCk/IMG_9050.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-pSxDN-c-t5Y/U7nmBD3GBAI/AAAAAAAAFLY/Lmje1LjqMro/IMG_2675.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-pBGo2WI7QmU/U7nmBBTV1BI/AAAAAAAAFLY/6HSW2vSXW00/IMG_9063.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-sBZm9QENUYo/U7nmBOYqHjI/AAAAAAAAFLY/45E-he5M6nM/IMG_9065.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-eI0piRIrkrU/U7nmBLBIAmI/AAAAAAAAFLY/hnZZPcxkb1c/IMG_9067.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-GqiiMSfcWjg/U7nmBAze_WI/AAAAAAAAFLY/cCBX5FG8NIY/IMG_9072.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-8BHeZSdJ6IQ/U7nmBFahm3I/AAAAAAAAFLY/rJ2N5fFPuBA/IMG_9083.jpg', city: 'Augsburg' });
this.addPic({ title: "Lunch at Hofbräuhaus", src: 'https://lh5.googleusercontent.com/-nIRhjXuPlf0/U7nmBJBrbhI/AAAAAAAAFLY/WOwsx8jwqeI/IMG_9085.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-Mi77FQX_10I/U7nmBKYyrII/AAAAAAAAFLY/ZaMnyYQq9Bw/IMG_9100.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-qC7sw6cq-fw/U7nmBKsY5FI/AAAAAAAAFLY/DNGfBIfgbL0/IMG_9107.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-tlh9NC7dvp0/U7nmBC_2J0I/AAAAAAAAFLY/HL98Xhetmto/IMG_9141.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-uSHP6Wz5WgA/U7nmBLElwNI/AAAAAAAAFLY/INq9a-SPdic/IMG_9143.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-d_y2DVkh92Y/U7nmBMtUTyI/AAAAAAAAFLY/JIH4mMT8Hpc/IMG_2698-MOTION.gif', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-FBqo2pZbgLk/U7nmBB5ADQI/AAAAAAAAFLY/iTqFsHt3hho/IMG_2700.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh5.googleusercontent.com/-TPg17xWdpok/U7nmBDf_UsI/AAAAAAAAFLY/FdyXcZ0m5D0/IMG_9182.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-F12MYaOk1jw/U7nmBDyKVoI/AAAAAAAAFLY/gVBbeDJsYj8/IMG_9192.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-dtKr1DQbnqA/U7nmBOtyGRI/AAAAAAAAFLY/UcCn1afoCfQ/IMG_9194.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-Uw7lozNsrac/U7nmBJyJVsI/AAAAAAAAFLY/bG7npT7n-uk/IMG_2708.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh4.googleusercontent.com/-wK_62W4ySDQ/U7nmBELKYWI/AAAAAAAAFLY/ToDa-6EMrVM/IMG_2712.JPG', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-9iBRvytcCFA/U7nmBL6ZxHI/AAAAAAAAFLY/BxafvU2Gw90/IMG_9198.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh3.googleusercontent.com/-UQMoELpH8pc/U7nmBI0h3RI/AAAAAAAAFLY/UKWckCiQj_E/IMG_9201.jpg', city: 'Augsburg' });
this.addPic({ title: '', src: 'https://lh6.googleusercontent.com/-WdSlFuny-v0/U7nmBLKIpVI/AAAAAAAAFLY/kFLS7kgUxXw/IMG_9205.jpg', city: 'Augsburg' });

    };

    this.after('initialize', function () {
      this.loadData();
      this.on(document, 'getCitiesData', this.cities);
      this.on(document, 'getPicsData', this.pics);
    });
  }

});
