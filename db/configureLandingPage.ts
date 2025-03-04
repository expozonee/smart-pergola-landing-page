import {
  collection,
  doc,
  getDocs,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./db";

type ConfigType = {
  date: Timestamp;
  name: string;
};
const configCollection = collection(db, "configration");

export async function LandingPageConfiguration() {
  const config = await getDocs(configCollection);
  const configData = config.docs[0].data() as ConfigType;
  const docId = config.docs[0].id;
  const configRef = doc(db, "configration", docId);

  //   update the config
  async function updateConfig(name: string) {
    await updateDoc(configRef, {
      name,
      date: Timestamp.now(),
    });
  }

  const isCampaignConfigured = !!configData.name;

  return {
    updateConfig,
    data: configData,
    isCampaignConfigured,
  };
}
