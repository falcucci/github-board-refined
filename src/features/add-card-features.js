import { observe } from "selector-observer";
import { addHistoryProgressBar } from "./add-history-progress-bar";
import { hideReferences } from "./hide-references";
import { addLabels } from "./add-labels";

export const addCardFeatures = async () => {
  observe("div[id^='card-']", {
    add(el) {
      cardFeatures(el);
      // el.addEventListener('onshow', addProgressBar)
    },
  });
};

export const cardFeatures = async el => {
  addLabels(el);
  addHistoryProgressBar(el);
  hideReferences(el);
};
