import { InputGenerated } from "../utils/inputGeneratedForm";
import { CSSProperties } from "react";

export interface ICodeProps {
    lenguaje: string;
    theme?: CodeThemes;
    code: string;
}
export interface CodeCSS {
    container?: CSSProperties;
}

export interface ICodeAttribute {
    props: ICodeProps;
    style?: CodeCSS;
    target: "code";
    __type: "Complex";
    schema?: InputGenerated[];
    name: string;
}


export type CodeThemes =
    | 'a11yDark'
    | 'a11yLight'
    | 'agate'
    | 'anOldHope'
    | 'androidstudio'
    | 'arduinoLight'
    | 'arta'
    | 'ascetic'
    | 'atelierCaveDark'
    | 'atelierCaveLight'
    | 'atelierDuneDark'
    | 'atelierDuneLight'
    | 'atelierEstuaryDark'
    | 'atelierEstuaryLight'
    | 'atelierForestDark'
    | 'atelierForestLight'
    | 'atelierHeathDark'
    | 'atelierHeathLight'
    | 'atelierLakesideDark'
    | 'atelierLakesideLight'
    | 'atelierPlateauDark'
    | 'atelierPlateauLight'
    | 'atelierSavannaDark'
    | 'atelierSavannaLight'
    | 'atelierSeasideDark'
    | 'atelierSeasideLight'
    | 'atelierSulphurpoolDark'
    | 'atelierSulphurpoolLight'
    | 'atomOneDarkReasonable'
    | 'atomOneDark'
    | 'atomOneLight'
    | 'brownPaper'
    | 'codepenEmbed'
    | 'colorBrewer'
    | 'darcula'
    | 'dark'
    | 'defaultStyle'
    | 'docco'
    | 'dracula'
    | 'far'
    | 'foundation'
    | 'githubGist'
    | 'github'
    | 'gml'
    | 'googlecode'
    | 'gradientDark'
    | 'grayscale'
    | 'gruvboxDark'
    | 'gruvboxLight'
    | 'hopscotch'
    | 'hybrid'
    | 'idea'
    | 'irBlack'
    | 'isblEditorDark'
    | 'isblEditorLight'
    | 'kimbieDark'
    | 'kimbieLight'
    | 'lightfair'
    | 'lioshi'
    | 'magula'
    | 'monoBlue'
    | 'monokaiSublime'
    | 'monokai'
    | 'nightOwl'
    | 'nnfxDark'
    | 'nnfx'
    | 'nord'
    | 'obsidian'
    | 'ocean'
    | 'paraisoDark'
    | 'paraisoLight'
    | 'pojoaque'
    | 'purebasic'
    | 'qtcreatorDark'
    | 'qtcreatorLight'
    | 'railscasts'
    | 'rainbow'
    | 'routeros'
    | 'schoolBook'
    | 'shadesOfPurple'
    | 'solarizedDark'
    | 'solarizedLight'
    | 'srcery'
    | 'sunburst'
    | 'tomorrowNightBlue'
    | 'tomorrowNightBright'
    | 'tomorrowNightEighties'
    | 'tomorrowNight'
    | 'tomorrow'
    | 'vs'
    | 'vs2015'
    | 'xcode'
    | 'xt256'
    | 'zenburn'