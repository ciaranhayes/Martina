import HeaderFront from "@/components/headerFront"
import ContentContainer from "@/components/items-containers"
import ContentContainerColoured from "@/components/item-contain-coloured"
import Footer from "@/components/footer"
import GeneralBio from "@/components/homepage-bio"
import QuotationBox from "@/components/quotation"

const posts = [
    {
        id: 1,
        title: 'Education',
        href: '/education',
        description:
            'An award-winning flautist and dedicated music educator with top honours from RIAM and Trinity College Dublin. Bringing world-class training and a passion for inspiring learners of all ages to every lesson',
    },
    {
        id: 2,
        title: 'Performance',
        href: '/performance-flute',
        description: 'Recognised with awards including the Trench Award, Arts Council of Ireland’s Agility Award, Culture Ireland, and Music Network’s Music Capital Scheme. Performances span solo, chamber, and orchestral stages across Ireland and Europe, from concerto debuts to international premieres.',
    },
    {
        id: 3,
        title: 'Artistic Management',
        href: '/arts-management',
        description:
            'Experienced in arts management, education programming, and orchestral administration, with roles at the National Symphony Orchestra of Ireland, RTÉ Concert Orchestra, Irish Baroque Orchestra, and the West Wicklow Chamber Music Festival. Known for professionalism and creativity, bringing dedication and attention to detail to every project.',
    },
    {
        id: 4,
        title: 'Academic Research',
        href: '/research',
        description:
            'Completed a First Class Honours Master’s in Music Performance with a top-of-class dissertation on Mel Bonis’s Violin Sonata in F-sharp Minor, Op. 112. Produced and premiered a flute and piano transcription in Paris and Ireland, presented research at major international conferences, and contributed to the revival of Bonis’s overlooked repertoire. Further developments will be announced soon.',
    }
]

export default function Page() {
  return (
    <>
      <HeaderFront />
      <ContentContainer posts={posts} />
      <QuotationBox />
      <GeneralBio />
      <ContentContainerColoured />
      <Footer />
    </> 
  )
}