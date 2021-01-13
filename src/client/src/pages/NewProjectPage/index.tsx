import * as React from "react";
import { injectIntl, InjectedIntlProps } from "react-intl";

import ProjectDetails from "../../components/ProjectDetails";
import { AppState } from "../../store/combineReducers";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import messagesWeb from "./messagesWeb";
import messagesReactNative from "./messagesReactNative";
import { PLATFORM } from "../../utils/constants/constants";
import Title from "../../components/Title";

type Props = InjectedIntlProps;

const NewProject = (props: Props) => {
  const platform: string = useSelector((state: AppState) => state.config.platform);
  const messages = (platform === PLATFORM.WEB) ? messagesWeb : messagesReactNative;
  return (
    <div className={styles.container}>
      <div className={styles.newProjectInfo}>
        <Title>{props.intl.formatMessage(messages.header)}</Title>
        <div className={styles.body}>{props.intl.formatMessage(messages.body)}</div>
        <div className={styles.projectDetailsContainer}>
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(NewProject);
