type CashinCallback = (amount: number) => void;
type CardPurchaseCallback = (result: boolean) => void;
type DisplayCallback = (message: string) => void;
type VendCallback = (result: boolean) => void;

class Emulator {
  private cashinHandler: ((event: KeyboardEvent) => void) | null = null;
  private cardHandler: ((event: KeyboardEvent) => void) | null = null;
  private vendHandler: ((event: KeyboardEvent) => void) | null = null;

  StartCashin(cb: CashinCallback): void {
    console.log('Купюроприёмник включён.');

    this.cashinHandler = (event: KeyboardEvent) => {
      let amount = 0;
      switch (event.key) {
        case '1':
          amount = 10;
          break;
        case '2':
          amount = 50;
          break;
        case '3':
          amount = 100;
          break;
      }

      if (amount > 0) {
        cb(amount);
      }
    };

    document.addEventListener('keydown', this.cashinHandler);
  }

  StopCashin(): void {
    console.log('Купюроприёмник отключён.');

    if (this.cashinHandler) {
      document.removeEventListener('keydown', this.cashinHandler);
      this.cashinHandler = null;
    }
  }

  BankCardPurchase(amount: number, cb: CardPurchaseCallback, display_cb: DisplayCallback): void {
    console.log(`Начата транзакция на сумму ${amount} с карты.`);
    display_cb('Приложите карту');

    this.cardHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          display_cb('Обработка карты');
          display_cb('Связь с банком');
          setTimeout(() => {
            cb(true);
            display_cb('Транзакция завершена успешно.');
          }, 2000);
          break;
        case 'Escape':
          cb(false);
          display_cb('Транзакция не удалась.');
          break;
      }
    };

    document.addEventListener('keydown', this.cardHandler);
  }

  BankCardCancel(): void {
    console.log('Отмена операции по карте.');
    if (this.cardHandler) {
      document.removeEventListener('keydown', this.cardHandler);
      this.cardHandler = null;
    }
  }

  Vend(product_idx: number, cb: VendCallback): void {
    console.log(`Запрос на выдачу продукта с индексом ${product_idx}`);

    this.vendHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          console.log('Выдача успешна.');
          cb(true);
          break;
        case 'Escape':
          console.log('Выдача не удалась.');
          cb(false);
          break;
      }
    };

    document.addEventListener('keydown', this.vendHandler);
  }

  StopVend(): void {
    console.log('Завершение выдачи.');
    if (this.vendHandler) {
      document.removeEventListener('keydown', this.vendHandler);
      this.vendHandler = null;
    }
  }
}

export const emulator = new Emulator();
