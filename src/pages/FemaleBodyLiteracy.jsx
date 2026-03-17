import React from "react";
import PageLayout from "../components/PageLayout";
import PostItNote from "../components/PostItNote";

const FemaleBodyLiteracy = () => (
  <PageLayout>
    <h1 class="yellow">Feminine Literacy</h1>
    <div id="noticeboard">
        <PostItNote
          id="noteVICRESOURCES"
          className="note yellow"
          title="In Victoria, Australia"
          lastUpdated=""
        >
          <ul style={{"list-style-type": "none", margin: 0, padding: 0}}>
            
            
            <li><a href="https://www.betterhealth.vic.gov.au/free-pads-and-tampons"><img className="icon" src="https://content.dhhs.vic.gov.au/sites/default/files/2024-10/pat-menstrual-cycle.png" alt="free menstrual products" /> Free Menstrual Products</a></li>
            <li><a href="https://www.betterhealth.vic.gov.au/chemist-care-now"><img className="icon" src="https://content.dhhs.vic.gov.au/sites/default/files/2025-10/contraceptive-pill-icon-chemist-care-now.png" alt="prescription-free contraception at pharmacy" /> Contraceptive pill and UTI treatments available at chemist without prescription from July 2026</a></li>

            <li><a href="https://www.whv.org.au/"><img className="icon" src="https://www.whv.org.au/wp-content/themes/womens-health/assets/img/favicon/favicon-96x96.png" alt="WHV" /> Women's Health Victoria</a></li>
            <li><a href="https://www.1800myoptions.org.au/"><img className="icon" src="/images/1800myoptions.png" alt="1800myoptions" /> 1800 My Options - Pro-Choice Information</a></li>
            <li><a href="https://www.thewomens.org.au/"><img className="icon" src="/images/royal_womens.png" alt="the royal womens hospital" /> The Royal Women's Hospital Information</a></li>
            <li><a href="https://birthforhumankind.org/"><img className="icon" src="/images/bfh.png" alt="Birth for Humankind" /> Birth for Humankind</a></li>

            <li><a href="https://www.clairetonti.com/matrescence-festival"><img className="icon" src="https://images.squarespace-cdn.com/content/v1/636357d43f10dc4df45f13ff/93f15c94-9405-42c2-a6a8-e96e6bb2c8b0/Moonta+28.jpg?format=2500w" alt="Matresence Festival" /> Matresence Festival</a></li>
            <li><a href="https://kyricycles.co/"><img className="icon" src="https://kyricycles.co/cdn/shop/files/Kyri_Primary_Logo_RGB__Light_Lilac.png?v=1729560792&width=800" alt="Kyri Cycles" /> Kyri Cycles - temperature tracking with no subscription fees</a></li>

          </ul>
          
        </PostItNote>
        <PostItNote
          id="noteINTRESOURCES"
          className="note yellow"
          title="International/Virtual"
          lastUpdated=""
        >
          <ul style={{"list-style-type": "none", margin: 0, padding: 0}}>
            <li><a href="https://www.maternalgifteconomymovement.org/"><img className="icon" src="https://www.maternalgifteconomymovement.org/wp-content/uploads/2020/10/sun-solo.png" alt="Maternal Gift Economy Movement" /> Maternal Gift Economy Movement</a></li>
            <li><a href="https://elenabridgers.substack.com/"><img className="icon" src="https://substackcdn.com/image/fetch/$s_!TyZ2!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4efc2419-ff84-4da8-ab63-b9bada3b18e6_728x728.png" alt="Motherhood Until Yesterday by Elena Bridgers" /> Motherhood Until Yesterday by Elena Bridgers</a></li>
            <li><a href="https://www.parentsworkcollective.org.au/"><img className="icon" src="https://static.wixstatic.com/media/c7caf6_cd16b033ed504b33be2f444db11f7b8a~mv2.png/v1/fill/w_978,h_908,al_c,q_90,usm_0.66_1.00_0.01/c7caf6_cd16b033ed504b33be2f444db11f7b8a~mv2.webp" alt="Parents Work Collective" /> Parents Work Collective</a></li>
            <li><a href="https://www.arcwoman.com.au/"><img className="icon" src="https://images.squarespace-cdn.com/content/v1/640d9750e3651778e3a40b33/f150c378-3e04-40b1-a477-ede899a4d488/logo+1+transparent.png?format=1500w" alt="Arc Woman" /> Arc Woman</a></li>
            <li><a href="https://plantbabyplant.com/"><img className="icon" src="https://plantbabyplant.com/wp-content/uploads/2025/12/tree-1.webp" alt="Plant Baby Plant" /> Plant Baby Plant</a></li>
            <li><a href="https://hagia.de/en/international-academy-hagia"><img className="icon" src="https://hagia.de/typo3conf/ext/kmb_hagia/Resources/Public/Images/Logo-Hagia.png" alt="HAGIA" /> International Academy HAGIA for Modern Matriarchal Studies</a></li>
            <li><a href="https://web.archive.org/web/20211216085525/http://anncrittenden.com/contacts.htm"><img className="icon" src="/images/ann.png" alt="Ann Crittendens list of Resources" /> Ann Crittenden's Resources</a></li>
            
          </ul>
          
        </PostItNote>
        <PostItNote
          id="noteWORKSHOP"
          className="note yellow"
          title="Female Body Literacy Workshop"
          lastUpdated=""
        >
          <p style={{marginBottom:0}}>The wonderous science of female reproductive anatomy and hormones. By appointment only.</p>
          <img src="/images/fbl_preso.png" style={{maxWidth: 150, maxHeight: 150, marginLeft: 80}} />
        </PostItNote>
      </div>
  </PageLayout>
);

export default FemaleBodyLiteracy;
