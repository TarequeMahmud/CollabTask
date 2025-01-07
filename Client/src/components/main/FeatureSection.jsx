import styles from "@styles/main/FeatureSection.module.scss";
import features from "@datas/features.js";

const FeatureSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Features of This App</h1>
      {features.map((feature) => {
        return (
          <div className={styles["feature-container"]}>
            <div className={styles["img-div"]}>
              <img
                src={feature.icon}
                width={130}
                height={130}
                alt={feature.title}
              />
            </div>
            <div className={styles["desc-container"]}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureSection;
