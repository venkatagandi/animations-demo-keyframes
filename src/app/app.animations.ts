import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition(":enter,:leave", [animate(2000)])
]);

export let slide = trigger("slide", [
  transition(":enter", [
    animate(1000, style({ transform: "translateX(-10px)" }))
  ]),
  transition(":leave", [
    //ease-in with 1s start delay
    // animate("0.5s 1s ease-in", style({ transform: "translateX(-100%)" }))
    //ease-in without delay ("timeduration startdelay ease-in/ease-out/ease-in-out/default/cubic-bezier(xxx,xxx,xxx,xxx)")
    // animate("0.5s ease-in", style({ transform: "translateX(-100%)" }))
    //cubic bezier - http://cubic-bezier.com
    animate(
      "0.5s cubic-bezier(.61,.29,.07,1.02)",
      style({ transform: "translateX(-100%)" })
    )
  ])
]);
