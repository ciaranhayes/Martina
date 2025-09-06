import Header from "@/components/header"
import Footer from "@/components/footer"
import Arts from "@/components/arts"
import WestWicklow from "@/components/arts-text"
import QuoteArts1 from "@/components/arts-quote1"
import QuoteArts2 from "@/components/arts-quote2"

export default function ArtsManagement() {
    return (
        <>
            <Header />
            <Arts />
            <WestWicklow post={{ title: "West Wicklow Chamber Music Festival (Head of Education, May–Nov 2024)", description: "Martina led the festival’s education programme, coordinating and performing school outreach projects aligned with the festival’s programme, including an introduction to Prokofiev’s Peter and the Wolf. She secured funding through the Baltinglass Seed Fund Scheme 2024, which enabled her to curate a free ten-week Adult Music Appreciation course in collaboration with Baltinglass FETC and Music Generation Wicklow. Martina contributed to the organisation of the Rising Star concert and supported the festival’s partnership with the Contemporary Music Centre on its composition competition. She also managed the festival’s social media channels, ensuring engaging promotion of its events and education initiatives.", href: "/westwicklow.png" }} />
            <WestWicklow post={{ title: "Irish Baroque Orchestra (Assistant Manager, June 2024-Jan 2025)", description: "Martina supported the Irish Baroque Orchestra during projects as Assistant Manager and managed the Front of House team, including merchandise sales. She also served as on-site manager for the Irish Youth Baroque Orchestra course, delivered in partnership with the Irish Association of Youth Orchestras (IAYO).", href: "/IrishBaroque.png"}} />
            <WestWicklow post={{ title: "National Symphony Orchestra of Ireland (Artistic Planning Intern, May–Nov 2022)", description: "During her internship with the National Symphony Orchestra of Ireland, Martina worked closely with the artistic planning team, liaising with agents, soloists, and conductors. Her role included organising contracts, rehearsal schedules, and travel itineraries for the orchestra’s summer and main season. Martina also accompanied and assisted the orchestra on several national tours.", href: "/nch.png" }} />
            <WestWicklow post={{ title: "RTE Concert Orchestra (Orchestral Assistant, June–Sept 2025)", description: "Martina worked on a short-term contract assisting with orchestral management, including fixing the orchestra, organising and distributing contracts, and coordinating travel arrangements for the musicians.", href: "/rteconcert.png" }} />
            <QuoteArts1 />
            <QuoteArts2 />
            <Footer />
        </>
    )
}