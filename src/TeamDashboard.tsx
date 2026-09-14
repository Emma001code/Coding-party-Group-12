import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import MemberCard from './MemberCard'

//Author: Emmanuel Ngwoke
//Author: Victor Akin-Oladiran
//Author: Yvette Muhoracyeye
//Author: LeroY Carew

// Task 41: Member Interface — shape of a complete team member object
interface MemberData {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const initialMembers: MemberData[] = [
  { id: "1", name: "Emmanuel Ngwoke", role: "Frontend Developer", tasksCompleted: 10, isActive: true, bio: "A member of the React TypeScript development team." },
  { id: "2", name: "Aziza Solace Afadhali", role: "UI Designer", tasksCompleted: 8, isActive: false },
  { id: "3", name: "Victor Akin-Oladiran", role: "Backend Developer", tasksCompleted: 7, isActive: true, bio: "A member working on component props and TypeScript." },
];

function TeamDashboard() {
  // Task 42: Array State (Typed) — members live in useState so the list can change later
  const [members, setMembers] = useState<MemberData[]>(initialMembers);

  // Task 31: useState Hook (Typed) — numeric teamScore
  const [teamScore, setTeamScore] = useState<number>(0);

  // Task 36: String State — new member's name
  const [newMemberName, setNewMemberName] = useState<string>('');

  // Task 40: track the most recently submitted name so we have something to display
  const [lastSubmittedName, setLastSubmittedName] = useState<string>('');

  // Task 34: Functional Updates
  function handleIncreaseScore() {
    setTeamScore((previousScore) => previousScore + 1);
  }

  // Task 35: Decrease State, floored at 0
  function handleDecreaseScore() {
    setTeamScore((previousScore) => Math.max(0, previousScore - 1));
  }

  // Task 38: Change Event (Typed)
  function handleNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value);
  }

  // Task 39, 40 & 43: typed submit, preventDefault, add a new member object to state
  function handleAddMemberSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = newMemberName.trim();
    if (trimmedName === '') {
      return;
    }

    const newMember: MemberData = {
      id: crypto.randomUUID(),
      name: trimmedName,
      role: 'Team Member',
      tasksCompleted: 0,
      isActive: true,
    };

    // Task 43: Add Member — append the new object without mutating the old array
    setMembers((currentMembers) => [...currentMembers, newMember]);

    console.log('Submitted member name:', trimmedName);
    setLastSubmittedName(trimmedName);
    setNewMemberName('');
  }

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>We are breakout room 12 working on React TypeScript tasks as a team.</p>

      {/* Task 32: Display State */}
      <p>Team Score: <strong>{teamScore}</strong></p>

      {/* Task 33 & 34: increase button, functional update */}
      <button type="button" onClick={handleIncreaseScore}>+ Increase</button>

      {/* Task 35: decrease button, floored at 0 */}
      <button type="button" onClick={handleDecreaseScore}>− Decrease</button>

      {/* Task 39: input lives inside a form with a typed submit handler */}
      <form onSubmit={handleAddMemberSubmit}>
        {/* Task 37 & 38: controlled input, typed onChange */}
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameInputChange}
          placeholder="New member name"
        />
        <button type="submit">Add Member</button>
      </form>

      {/* Task 40: display the submitted name */}
      {lastSubmittedName && <p>Last submitted member name: {lastSubmittedName}</p>}

      {/* Task 30: Dashboard Layout — grid container for the member cards */}
      {/* Task 44: Render Updated State — mapping members state shows new cards automatically */}
      <div className="dashboard-grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            bio={member.bio}
          />
        ))}
      </div>
    </>
  )
}

export default TeamDashboard