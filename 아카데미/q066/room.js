function Room (roomname, roominfo, id, east, west, south, north, up, down) {
    this.roomname = roomname;
    this.roominfo = roominfo;
    this.id = id;
    this.east = east;
    this.west = west;
    this.south = south;
    this.north = north;
    this.up = up;
    this.down = down;

    this.displayRoomInfo = function() {
        tv("[" + this.roomname +"]\n");
        tv(this.roominfo+"\n");
        tv(this.getRoomEnter());
    }

    this.getRoomEnter = function() {
        var enters = "출구[ ";
        if(east != 0) {
            enters = enters + "동";
        } if(west != 0){
            enters = enters + "서";
        } if(south != 0){
            enters = enters + "남";
        } if(north != 0){
            enters = enters + "북";
        } if(up != 0){
            enters = enters + "위";
        } if(down != 0){
            enters = enters + "밑";
        } enters = enters + " ]\n";
        return enters;
    }   
}