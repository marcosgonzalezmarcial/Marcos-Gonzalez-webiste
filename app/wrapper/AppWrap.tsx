import NavigationDots from "@/components/NavigationDots";
import SocialMedia from "@/components/SocialMedia";
import globalStyles from "@/styles/globalStyles.module.css";

export default function AppWrap(
  Component: React.ElementType,
  idName: string,
  classNames: string
) {
  return function HOC() {
    return (
      <div
        id={idName}
        className={`${globalStyles.app__container} ${classNames}`}
      >
        <SocialMedia />
        <div
          data-test="data-test"
          className={`${globalStyles.app__wrapper} ${globalStyles.app__flex}`}
        >
          <Component />
          <div className={globalStyles.copyright}>
            <p className={globalStyles.pText}>@2020 MICHAEL</p>
            <p className={globalStyles.pText}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
}
