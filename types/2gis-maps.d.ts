declare module "2gis-maps" {
  interface MapOptions {
    center: [number, number]
    zoom: number
  }
  interface MapInstance {
    fitBounds: (bounds: unknown) => void
  }
  const DG: {
    map: (id: string, options: MapOptions) => MapInstance
    marker: (latlng: [number, number]) => {
      addTo: (map: MapInstance) => { bindPopup: (html: string) => unknown }
    }
    LatLngBounds: new (points: [number, number][]) => unknown
  }
  export = DG
}
