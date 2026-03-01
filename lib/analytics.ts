export function trackFormSubmit(formName: string) {
  if (typeof window === "undefined") return
  // window.gtag?.("event", "form_submit", { form_name: formName })
  // window.ym?.(XXXXXX, "reachGoal", "form_submit", { form: formName })
}

export function trackPhoneClick() {
  if (typeof window === "undefined") return
  // window.gtag?.("event", "click", { event_category: "contact", event_label: "phone" })
}

export function trackRouteClick() {
  if (typeof window === "undefined") return
  // window.gtag?.("event", "click", { event_category: "contact", event_label: "build_route" })
}

export function trackCtaClick(label: string) {
  if (typeof window === "undefined") return
  // window.gtag?.("event", "click", { event_category: "cta", event_label: label })
}
