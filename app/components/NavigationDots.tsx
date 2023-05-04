import globalStyles from "@/styles/globalStyles.module.css";

export default function NavigationDots({ active }: { active: string }): JSX.Element {
  return (
    <div className={globalStyles.app__navigation}>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={globalStyles.app__navigationDot}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
}
