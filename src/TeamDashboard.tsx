import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import MemberCard from './MemberCard'

// Author: Emmanuel Ngwoke
// Author: Aziza Solace Afadhali
// Author: Victor Akin-Oladiran
// Author: Yvette Muhoracyeye
// Author: LeroY Carew

// Task 41: Member Interface
interface MemberData {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const initialMembers: MemberData[] = [
  {
    id: "1",
    name: "Emmanuel Ngwoke",
    role: "Frontend Developer",
    tasksCompleted: 10,
    isActive: true,
    bio: "A member of the React TypeScript development team."
  },
  {
    id: "2",
    name: "Aziza Solace Afadhali",
    role: "UI Designer",
    tasksCompleted: 8,
    isActive: false
  },
  {
    id: "3",
    name: "Victor Akin-Oladiran",
    role: "Backend Developer",
    tasksCompleted: 7,
    isActive: true,
    bio: "A member working on component props and TypeScript."
  },
];

type MemberFilter = 'all' | 'active' | 'inactive';

function TeamDashboard() {
  // Task 42: Array State (Typed)
  const [members, setMembers] = useState<MemberData[]>(initialMembers);

  // Task 31: useState Hook (Typed)
  const [teamScore, setTeamScore] = useState<number>(0);

  // Task 36: String State
  const [newMemberName, setNewMemberName] = useState<string>('');

  // Task 40: Track submitted name
  const [lastSubmittedName, setLastSubmittedName] = useState<string>('');

  // Task 48: Member filter
  const [memberFilter, setMemberFilter] = useState<MemberFilter>('all');

  // Task 49: Search state
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  // Task 39, 40 & 43: Add member
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

    // Task 43: Add Member
    setMembers((currentMembers) => [...currentMembers, newMember]);

    console.log('Submitted member name:', trimmedName);
    setLastSubmittedName(trimmedName);
    setNewMemberName('');
  }

  // Task 46: Remove callback
  function handleRemoveMember(memberId: string) {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== memberId)
    );
  }

  // Task 47: Toggle active/inactive
  function handleToggleMemberStatus(memberId: string) {
    setMembers((currentMembers) =>
      currentMembers.map((member) =>
        member.id === memberId
          ? { ...member, isActive: !member.isActive }
          : member
      )
    );
  }

  // Task 49: Controlled search input
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  // Tasks 48 & 49: Filter and search members
  const displayedMembers = members.filter((member) => {
    const matchesFilter =
      memberFilter === 'all' ||
      (memberFilter === 'active' && member.isActive) ||
      (memberFilter === 'inactive' && !member.isActive);

    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>We are breakout room 12 working on React TypeScript tasks as a team.</p>

      {/* Task 32: Display State */}
      <p>
        Team Score: <strong>{teamScore}</strong>
      </p>

      {/* Task 33 & 34: Increase score */}
      <button type="button" onClick={handleIncreaseScore}>
        + Increase
      </button>

      {/* Task 35: Decrease score */}
      <button type="button" onClick={handleDecreaseScore}>
        − Decrease
      </button>

      {/* Task 39: Add member form */}
      <form onSubmit={handleAddMemberSubmit}>
        {/* Task 37 & 38: Controlled input */}
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameInputChange}
          placeholder="New member name"
        />
        <button type="submit">Add Member</button>
      </form>

      {/* Task 40: Display submitted name */}
      {lastSubmittedName && (
        <p>Last submitted member name: {lastSubmittedName}</p>
      )}

      {/* Tasks 48 & 49: Filter and search controls */}
      <div className="member-controls">
        <button type="button" onClick={() => setMemberFilter('all')}>
          All
        </button>

        <button type="button" onClick={() => setMemberFilter('active')}>
          Active
        </button>

        <button type="button" onClick={() => setMemberFilter('inactive')}>
          Inactive
        </button>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name"
        />
      </div>

      {/* Task 44: Updated members appear automatically */}
      <div className="dashboard-grid">
        {displayedMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            bio={member.bio}
            onRemove={() => handleRemoveMember(member.id)}
            onToggleStatus={() => handleToggleMemberStatus(member.id)}
          />
        ))}
      </div>
    </>
  )
}

export default TeamDashboard
