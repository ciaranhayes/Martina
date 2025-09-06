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
            'Martina Rosaria O’Connell is an experienced music educator in flute and music theory, dedicated to making music accessible and enjoyable for learners of all ages. She holds a First Class Honours Bachelor of Music Education from Trinity College Dublin and the Royal Irish Academy of Music (RIAM), which included a six-month Erasmus placement at the Royal Conservatoire of Scotland. She also earned a Master’s in Flute Performance from RIAM and Trinity College Dublin, graduating with distinction and achieving the highest result in her year.',
    },
    {
        id: 2,
        title: 'Performance',
        href: '/performance-flute',
        description: 'Martina Rosaria O’Connell is a highly accomplished Irish-Italian flautist and music educator. She recently completed her Master’s in Flute Performance with Distinction, graduating top of her class at the Royal Irish Academy of Music. Martina also holds a First-Class Honours degree in Music Education from Trinity College Dublin.',
    },
    {
        id: 3,
        title: 'Artistic Management',
        href: '/arts-management',
        description:
            'Martina has worked with some of Ireland’s leading arts organisations, including the National Symphony Orchestra of Ireland, RTÉ Concert Orchestra, Irish Baroque Orchestra, and the West Wicklow Chamber Music Festival. She is highly organised and professional, with a proven track record in arts management, education programming, and orchestral administration. Known as a reliable and hardworking colleague, Martina consistently delivers projects with creativity, dedication, and attention to detail.',
    },
    {
        id: 4,
        title: 'Academic Research',
        href: '/research',
        description:
            'As part of my Master’s in Music Performance dissertation, which I completed in 2024 with First Class Honours and graduating top of my class, I focused on Mel Bonis’s Violin Sonata in F-sharp Minor, Op. 112, widely regarded as her most advanced contribution to the sonata repertoire. Composed in 1923, the work demonstrates Bonis’s mastery of large-scale chamber writing, cyclic thematic development, and expressive harmonic language.',
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