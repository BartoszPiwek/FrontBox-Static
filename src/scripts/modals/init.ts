import { ModalsService } from "../service/modals";
import { ExampleModal } from "./example";

export let modals: ModalsService;

export function modalsInit() {
  const modalTriggers = document.querySelectorAll('[attr-modal]');

  if (!modalTriggers) {
    return;
  }

  modals = new ModalsService({
    modals: {
      example: new ExampleModal()
    }
  });

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modals.open(trigger.getAttribute('attr-modal'));
    });
  });
}