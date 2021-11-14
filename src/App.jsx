import React from 'react'
import 'tailwindcss/tailwind.css'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { MyTemplates } from './components/MyTemplates'

const data = {
  user: {
    id: 1,
    templates: [
      { title: 'Structure an Argument', createdDate: 10, updatedDate: 24 },
      { title: 'Email Your Advisor', createdDate: 14, updatedDate: 29 },
      { title: 'Book Report', createdDate: 19, updatedDate: 44 },
    ],
  },
}

function App() {
  return (
    <div className="App">
      <Header
        user={data.user}
        onLogin={() => console.log('Log In')}
        onLogout={() => console.log('Log Out')}
        onCreateAccount={() => console.log('Create Account')}
      />

      <main>
        <MyTemplates templates={data.user.templates} />
      </main>

      <Container>
        <article className="bg-white mt-10 p-10 rounded-lg shadow">
          <div className="prose prose-xl">
            <span className="text-gray-500 uppercase text-xs">My Draft</span>
            <h2>Research Proposal</h2>
            <p>
              For my class project, I plan to study gender inequality in
              education. I’m interested in this topic because I’m a woman
              majoring in mechanical engineering which is a male-dominated
              discipline. This topic is important because it contributes to
              larger social problems like inequality in income and career
              advancement between men and women. Through a preliminary
              literature search, I have found three relevant journal articles
              that will contribute to the development of my project’s thesis.
              The first article argues that gender imbalances in specific
              academic disciplines are explained by gendered self-selection
              bias. The second article argues that stereotypes in media and
              popular culture influence the career fields that people pursue in
              gendered ways. The third article argues that gender discrimination
              puts women and girls at a disadvantage when they try to entre
              male-dominated fields. Together, this body of research suggests
              that cultural and social causes, not biological causes, are the
              best explanation for gender disparities in education.{' '}
            </p>{' '}
            <p>
              To explore this topic further, I plan to conduct a/an interview
              study with 10 men and 10 women students majoring in mechanical
              engineering to explore their personal experiences of cultural
              influences on their choice of academic major. My data collection
              plan involves conducting semi-structured formal interviews with
              participants recruited through a snowball sampling approach. My
              data analysis plan involves thematic coding of the interview
              transcripts using software available at the library.
            </p>
          </div>
        </article>
      </Container>
    </div>
  )
}

export default App
