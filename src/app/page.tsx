import Image from "next/image";
import styles from "./page.module.scss";
import ProfileCard from "@/components/ProfileCard";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileCard />
      <SkillCard/>
    </main>
  );
}
