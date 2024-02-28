import { LanguageLevels } from "../enums/enums"

export type Languages = {
    common?: LanguageType,
    birth?: LanguageType,
    elf?: LanguageType,
    dwarf?: LanguageType,
    orc?: LanguageType,
    antic?: LanguageType,
    daemon?: LanguageType,
    rune?: LanguageType,
}

type LanguageType = {
    writing?: LanguageLevels,
    reading?: LanguageLevels,
    speaking?: LanguageLevels,
    listening?: LanguageLevels
}