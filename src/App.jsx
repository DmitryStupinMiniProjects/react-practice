import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import { ways, differences } from './data'



function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <TeachingSection></TeachingSection>
            <DifferencesSection></DifferencesSection>
          </>
        )}

        {tab === 'feedback' && (
          <>
            <FeedbackSection></FeedbackSection>
          </>
        )}
      </main>
    </>
  )
}

export default App
