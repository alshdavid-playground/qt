import { Directive, Input } from "../kit";

@Directive({
  selector: 'for',
  template: ({ ctx }) => {
    return ctx.process()
  }
})
export class For {
  @Input()
  items = []

  @Input()
  children: any

  process() {
    return this.items.map(this.children)
  }
}