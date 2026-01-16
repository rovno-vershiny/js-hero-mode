class VershinyAxios {
  // 1. Конструктор принимает конфиг (например, { baseUrl: '...' })
  constructor(config) {
    // TODO: Сохраните config в this.config
    // Если config не передан, используйте пустой объект по умолчанию
    this.config = config || {};
  }

  // 2. Универсальный метод для отправки запроса (внутренний хелпер)
  // endpoint - например '/posts'
  // method - 'GET', 'POST', 'PUT' или 'DELETE'
  // data - тело запроса (объект), необязательно
  async _request(endpoint, method, data = null) {
    // TODO: Сформируйте полный URL.
    // Подсказка: Если в this.config.baseUrl есть адрес, склейте его с endpoint.
    const url = ''; // Ваш код здесь

    // TODO: Подготовьте настройки для fetch (options)
    const options = {
      method: method,
      headers: {
        // Берем заголовки из конфига или ставим пустой объект
        ...(this.config.headers || {}),
      }
    };

    // TODO: Если есть data (для POST/PUT), добавьте заголовок Content-Type
    // и превратите data в строку JSON в options.body
    if (data) {
      // Ваш код здесь: добавьте 'Content-Type': 'application/json' в headers
      // Ваш код здесь: запишите JSON.stringify(data) в body
    }

    try {
      // TODO: Вызовите fetch(url, options)
      const response = await fetch(url, options);

      // TODO: Проверьте response.ok. Если false — выбросьте ошибку.
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      // TODO: Верните результат парсинга JSON (return await response.json())
      return null; // Заглушка
    } catch (error) {
      console.error('VershinyAxios Error:', error);
      throw error;
    }
  }

  // --- Публичные методы (обертки над _request) ---

  get(endpoint) {
    // TODO: Вызовите this._request с методом 'GET'
    return this._request(endpoint, 'GET');
  }

  post(endpoint, data) {
    // TODO: Вызовите this._request с методом 'POST' и данными
    return this._request(endpoint, 'POST', data);
  }

  // Метод update (в HTTP обычно это PUT или PATCH)
  put(endpoint, data) {
    // TODO: Вызовите this._request с методом 'PUT' и данными
    return this._request(endpoint, 'PUT', data);
  }

  delete(endpoint) {
    // TODO: Вызовите this._request с методом 'DELETE'
    return this._request(endpoint, 'DELETE');
  }

  // --- Статический метод для создания экземпляра ---
  static create(config) {
    // TODO: Верните новый new VershinyAxios(config)
    return null; // Заглушка
  }
}