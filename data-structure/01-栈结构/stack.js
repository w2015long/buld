//栈特性
(function (w) {
    function Stack() {
        this.items = [];
    }

    Stack.prototype = {
        constructor:Stack,
        pop() {//出栈
            return this.items.pop()
        },
        push(elem){//入栈
            this.items.push(elem)
        },
        peek(){//查看栈顶元素
            return this.items[this.item.length - 1]
        },
        isEmpty(){//判断栈是否为空
            return !this.items.length
        },
        size(){
            return this.items.length
        },
        toJSON(){
            return JSON.stringify(this.items)
        }

    }
    w.Stack = Stack
})(window);
