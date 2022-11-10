import {connect} from 'react-redux';
import Slug from './question/[slug]';
import {all_selected_options_list} from './question/[slug]'
import {getAllPersonalities,getByPersonalityBySlug} from './api/personality'


var personality = {"Openness" :0 , "Agreeableness":0, "Extraversion":0 , "Conscientiousness":0 , "Neuroticism":0 }




// export async function getStaticProps({params}) {
//   const single_personality = await getByPersonalityBySlug(params.Slug);
//   console.log(single_personality)
//   return {
//       props: {
//           single_personality,
//       }
//   }
// }

// export async function getStaticPaths() {
//   const all_personalities = await getAllPersonalities();
//   const paths = all_personalities
//   console.log(paths)
//   return {
//       paths,
//       fallback: false
//   }
// }



export const finish = () => {
  return (
    <div>
      <h2>{`Hi There ${all_selected_options_list}`}</h2>
    </div>
  )
}

export default finish;


