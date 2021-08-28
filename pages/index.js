import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const articles = [
  { id: 1, title: "Great times", excerpt: "Await you" },
  { id: 2, title: "Great times", excerpt: "Await you" },
  { id: 3, title: "Great times", excerpt: "Await you" },
  { id: 4, title: "Great times", excerpt: "Await you" },
  { id: 5, title: "Great times", excerpt: "Await you" },
  { id: 6, title: "Great times", excerpt: "Await you" },
];

export default function Home() {
  return (
    <div className={styles.articles}>
      {articles.map((article, i) => (
        <motion.div
          key={article.id}
          className={styles.article}
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -50 : 50,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
        >
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </motion.div>
      ))}
    </div>
  );
}
