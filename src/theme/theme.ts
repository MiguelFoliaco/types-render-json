import { Palette } from "./palette";
import { Shadows } from "./shadows";
import { Transitions, TransitionsOptions } from "./easing";
import { Typography } from "./typography";

export interface ThemeOptions {
    palette?: Palette;
    shadows?: Shadows;
    transitions?: Transitions;
    typography?: Typography;
    //zIndex: ZIndex;
    unstable_strictMode?: boolean;
}