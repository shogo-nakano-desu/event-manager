import { Id } from '../../common/values/Id.value';
export class Questionnaire {
  private readonly questionnaireId: Id;
  private readonly eventId: Id;
  private readonly userId: Id;

  #status: boolean;
  #answerDateTime: Date;
  #questionnaireURL: string; //google formのURL
}
