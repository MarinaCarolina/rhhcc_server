import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface IAnalytics<TPayload> {
  message: string;
  payload?: TPayload;
  success?: boolean;
  fail?: boolean;
  id: string;
}

export interface IProvidePayload {
  successMessage: string;
  failureMessage: string;
  id: string;
}

// TODO: реализовать дополнительную логику для кэширования ошибок с использованием Sentry

@Injectable()
export class AnalyticsService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  // Метод для успешного результата и отправки события
  success<TPayload>(data: IAnalytics<TPayload>): IAnalytics<TPayload> {
    this.eventEmitter.emit('analytics_success', data);
    return { ...data, success: true, fail: false };
  }

  // Метод для неуспешного результата и отправки события
  fail<TPayload>(data: IAnalytics<TPayload>): IAnalytics<TPayload> {
    console.log(`===========${data.message}===========`);
    console.log(data.payload);
    this.eventEmitter.emit('analytics_fail', data);
    return { ...data, fail: true, success: false };
  }

  // Метод для выполнения функции и предоставления аналитики
  async provide<TResult>(
    { successMessage, failureMessage, id }: IProvidePayload,
    fn: () => Promise<TResult>,
  ): Promise<IAnalytics<TResult>> {
    try {
      // Выполняем функцию
      const result = await fn();

      // Формируем успешный результат и отправляем событие
      return this.success<TResult>({
        message: successMessage,
        payload: result,
        fail: false,
        success: true,
        id,
      });
    } catch (err) {
      // Формируем неуспешный результат, возвращая ошибку как payload
      return this.fail<TResult>({
        message: failureMessage,
        payload: err as TResult, // Принудительно приводим к TResult
        fail: true,
        success: false,
        id,
      });
    }
  }
}
