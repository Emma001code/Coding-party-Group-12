import MemberCard from './MemberCard'

//Author: Emmanuel Ngwoke
//Author: Victor Akin-Oladiran

//Author: Yvette Muhoracyeye

interface MemberData {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const memberList: MemberData[] = [
  { name: "Emmanuel Ngwoke", role: "Team Member", tasksCompleted: 10, isActive: true, bio: "A member of the React TypeScript development team." },
  { name: "Aziza Solace Afadhali", role: "Team Member", tasksCompleted: 8, isActive: false },
  { name: "Victor Akin-Oladiran", role: "Team Member", tasksCompleted: 7, isActive: true, bio: "A member working on component props and TypeScript." },
];


function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>We are breakout room 12 working on React TypeScript tasks as a team.</p>

      {memberList.map((member) => (
        <MemberCard
          key={member.name}
          name = {member.name}
          role = {member.role}
          tasksCompleted = {member.tasksCompleted}
          isActive = {member.isActive}
          bio = {member.bio}
        />
      ))}
    </>
  )
}

export default TeamDashboard
