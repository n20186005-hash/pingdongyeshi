from PIL import Image, ImageDraw, ImageFont
import os

OUT = "public/images/og-cover.jpg"
W, H = 1200, 630

img = Image.new("RGB", (W, H), (11, 7, 16))
draw = Image.new("RGB", (W, H))
overlay = ImageDraw.Draw(draw)

try:
    font_path = "C:/Windows/Fonts/msjhbd.ttc"
    title_font = ImageFont.truetype(font_path, 96)
    sub_font = ImageFont.truetype(font_path, 40)
except Exception:
    title_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()

accent = (255, 178, 15)
cream = (255, 243, 207)
muted = (199, 184, 166)

overlay.rectangle([(0, 0), (W, 8)], fill=accent)
overlay.text((90, 200), "屏東觀光夜市", font=title_font, fill=cream)
overlay.text((92, 330), "Pingtung Night Market", font=sub_font, fill=accent)
overlay.text((92, 420), "（屏東市・民族路）旅遊指南", font=sub_font, fill=muted)
overlay.text((92, 500), "必吃美食 · 營業時間 · 交通停車", font=sub_font, fill=muted)

img.paste(draw)
img.save(OUT, "JPEG", quality=88)
print("wrote", OUT, os.path.getsize(OUT), "bytes")
