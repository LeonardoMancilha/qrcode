import styles from "./formqrcode.module.css";

export default function QRForm({ url, setUrl, onGenerate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Gerar
      </button>
    </form>
  );
}
