from PIL import Image
import numpy as np
from pathlib import Path

src = Path(r"src/assets/Logo.png")
backup = Path(r"src/assets/Logo-on-dark.png")
out = Path(r"src/assets/Logo.png")

img = Image.open(src).convert("RGBA")
if not backup.exists():
    img.save(backup)

arr = np.array(img)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

# Near-black background only (preserve dark teal in the monogram)
black = (r < 26) & (g < 26) & (b < 26)
arr[black, 3] = 0

fringe = (r < 48) & (g < 48) & (b < 48) & ~black
lum = np.maximum(np.maximum(r, g), b).astype(np.float32)
soft = np.clip((lum[fringe] - 26.0) / 22.0, 0, 1)
arr[fringe, 3] = (soft * 255).astype(np.uint8)

alpha = arr[:, :, 3]
ys, xs = np.where(alpha > 8)
if len(xs) and len(ys):
    pad = 8
    left = max(int(xs.min()) - pad, 0)
    right = min(int(xs.max()) + pad + 1, arr.shape[1])
    top = max(int(ys.min()) - pad, 0)
    bottom = min(int(ys.max()) + pad + 1, arr.shape[0])
    arr = arr[top:bottom, left:right]

out_img = Image.fromarray(arr)
out_img.save(out, optimize=True)
print(f"saved {out} size={out_img.size} backup={backup.exists()}")
