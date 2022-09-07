import { RendererSDK, tryFindFile } from "github.com/octarine-public/wrapper/wrapper/Imports"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined)
		LoadFont(realPath, isFallback)
	else
		console.error(`Failed to find font file ${path}`)
}

LoadFontWrapper("fonts/NotoSansJP/NotoSansJP-Bold.otf")
LoadFontWrapper("fonts/NotoSansJP/NotoSansJP-Regular.otf", true)
