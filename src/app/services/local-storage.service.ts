import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TypeCart } from '../type/TypeProducts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private storageSubject = new Subject<string>();
  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  // Tất cả các xử lý của ls sẽ thực hiện ở đây, để kích hoạt việc lắng nghe

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem:TypeCart) {
    // thực hiên thêm sp vào giỏ
    // 1. Lấy ra toàn bộ sp trong cart
    const cartItems = this.getItem();
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem nếu có thì update chưa thì add mới
    const existItem = cartItems.find((item: TypeCart) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // 3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
}
