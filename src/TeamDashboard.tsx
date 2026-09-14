import MemberCard from './MemberCard'

//Author: Emmanuel Ngwoke
//Author: Victor Akin-Oladiran

function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>We are breakout room 12 working on React TypeScript tasks as a team.</p>

      <MemberCard
        name="Emmanuel Ngwoke"
        role="Team Member"
        tasksCompleted={10}
        isActive={true}
        bio="A member of the React TypeScript development team."
      />

      <MemberCard
        name="Aziza Solace Afadhali"
        role="Team Member"
        tasksCompleted={8}
        isActive={false}
      />

      <MemberCard
        name="Victor Akin-Oladiran"
        role="Team Member"
        tasksCompleted={7}
        isActive={true}
        bio="A member working on component props and TypeScript."
      />
    </>
  )
}

export default TeamDashboard
