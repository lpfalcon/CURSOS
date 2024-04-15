import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";
export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        initialIsFollowing
      >
        <strong> User Name</strong>
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
        <strong> User Name</strong>
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName}>
        <strong> User Name</strong>
      </TwitterFollowCard>
    </section>
  );
}
