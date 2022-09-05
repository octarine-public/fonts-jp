import { RendererSDK, tryFindFile } from "github.com/octarine-public/wrapper/wrapper/Imports"

function LoadFontWrapper(path: string, isFallback = false) {
	const realPath = tryFindFile(path)
	if (realPath !== undefined)
		LoadFont(realPath, isFallback)
	else
		console.error(`Failed to find font file ${path}`)
}

RendererSDK.CreateFont("Noto Sans Japanese", "fonts/NotoSansJP/NotoSansJP-Bold.otf", 700, false)
RendererSDK.CreateFont("Noto Sans Japanese", "fonts/NotoSansJP/NotoSansJP-Regular.otf", 400, false)

LoadFontWrapper("fonts/NotoSansJP/NotoSansJP-Bold.otf")
LoadFontWrapper("fonts/NotoSansJP/NotoSansJP-Regular.otf", true)
