import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@mo-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
