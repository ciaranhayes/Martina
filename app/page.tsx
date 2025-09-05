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
        href: '/teaching',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 2,
        title: 'Performance',
        href: '/performance-flute',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 3,
        title: 'Artistic Management',
        href: '/arts-management',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 4,
        title: 'Academic Research',
        href: '/research',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    }
]

export default function Page() {
  return (
    <>
      <HeaderFront />
      <ContentContainer posts={posts} />
      <GeneralBio />
      <QuotationBox />
      <ContentContainerColoured />
      <Footer />
    </> 
  )
}