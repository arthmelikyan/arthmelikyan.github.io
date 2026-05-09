type GalleryItem = {
  src: string
  width: number
  height: number
  alt?: string
}

export function usePhotoSwipe() {
  const open = async (items: GalleryItem[], index = 0) => {
    if (!import.meta.client) return

    const [{ default: PhotoSwipeLightbox }, { default: PhotoSwipe }] = await Promise.all([
      import('photoswipe/lightbox'),
      import('photoswipe'),
      import('photoswipe/style.css'),
    ])

    const lightbox = new PhotoSwipeLightbox({
      dataSource: items.map((it) => ({
        src: it.src,
        width: it.width,
        height: it.height,
        alt: it.alt,
      })),
      pswpModule: PhotoSwipe,
      showHideAnimationType: 'zoom',
      bgOpacity: 0.95,
      padding: { top: 24, bottom: 24, left: 16, right: 16 },
    })

    lightbox.on('close', () => {
      lightbox.destroy()
    })

    lightbox.init()
    lightbox.loadAndOpen(index)
  }

  return { open }
}
