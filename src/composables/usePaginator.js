import { computed } from "vue";
import { useStore } from "vuex";

export function usePaginator(module) {
  const store = useStore();
  const prevPage = computed(() => {
    const prevPage = store.state[module].info.prev;
    if (!prevPage) return "";
    const indexName = prevPage.indexOf("page=");
    const indexCut =
      prevPage.indexOf("&") === -1 ? prevPage.length : prevPage.indexOf("&");
    return prevPage.substring(indexName, indexCut);
  });
  const nextPage = computed(() => {
    const nextPage = store.state[module].info.next;
    if (!nextPage) return "";
    const indexName = nextPage.indexOf("page=");
    const indexCut =
      nextPage.indexOf("&") === -1 ? nextPage.length : nextPage.indexOf("&");
    return nextPage.substring(indexName, indexCut);
  });
  return {
    prevPage,
    nextPage,
    total: computed(() => store.state[module].info.count),
  };
}
