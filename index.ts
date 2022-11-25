import { tryFindFile } from "github.com/octarine-public/wrapper/index"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined) LoadFont(realPath, isFallback)
	else console.error(`Failed to find font file ${path}`)
}

LoadFontWrapper("fonts/MPLUS1/MPLUS1-VariableFont_wght.ttf", true)
