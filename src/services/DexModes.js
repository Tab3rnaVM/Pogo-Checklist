import SortModes from "./SortModes";

export default class DexModes {
  static DEX = "dex";
  static SHINY = "shiny";
  static LUCKY = "lucky";
  static UNOWN = "unown";
  static PERFECT = "perfect";
  static SHADOW = "shadow";
  static PURIFIED = "purified";
  static EVENT = "event";
  static MEGA = "mega";

  static getPageTitle(mode) {
    switch (mode) {
      case DexModes.DEX:
        return "Dex";
      case DexModes.SHINY:
        return "ShinyDex";
      case DexModes.LUCKY:
        return "LuckyDex";
      case DexModes.UNOWN:
        return "UnownDex";
      case DexModes.PERFECT:
        return "PerfectDex";
      case DexModes.SHADOW:
        return "ShadowDex";
      case DexModes.PURIFIED:
        return "PurifiedDex";
      case DexModes.EVENT:
        return "EventDex";
      case DexModes.MEGA:
        return "EventMega";
      default:
        throw new Error("Unknown page mode");
    }
  }

  static getSaveKey(mode) {
    switch (mode) {
      case DexModes.DEX:
        return "dex";
      case DexModes.SHINY:
        return "shinies";
      case DexModes.LUCKY:
        return "luckies";
      case DexModes.UNOWN:
        return "unown";
      case DexModes.PERFECT:
        return "perfects";
      case DexModes.SHADOW:
        return "shadows";
      case DexModes.PURIFIED:
        return "purifieds";
      case DexModes.EVENT:
        return "events";
      case DexModes.MEGA:
        return "megas";
      default:
        throw new Error();
    }
  }

  static getDefaultSortOrder(mode) {
    return mode === DexModes.UNOWN ? SortModes.NAME : SortModes.ID;
  }
}
